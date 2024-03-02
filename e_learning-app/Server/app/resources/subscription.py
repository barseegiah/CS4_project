from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Subscription
from app.schemas.subscription import SubscriptionSchema

subscription_schema = SubscriptionSchema()

class SubscriptionResource(Resource):
    @classmethod
    def post(cls):
        subscription = subscription_schema.load(request.get_json())
        
        subscription.save_to_db()

        return {"message": "created successfully."}, 201
    

class SubscriptionUpdateResource(Resource):
    @classmethod
    def put(cls, subscription_id: int):
        subscription = Subscription.find_by_id(subscription_id)

        if not subscription:
            return{"message": "Not Found"}, 404
        
        #Load the task data from the request
        update_subscription_data = subscription_schema.load(request.get_json())

        #Save the updated task to the database
        subscription.save_to_db()

        return{"message": "updated Successfully"}, 200
    
class SubscriptionDetailsResource(Resource):
    @classmethod
    def get(cls, subscription_id: int):
        subscription = Subscription.find_by_id(subscription_id)
        
        if not subscription:
            return {"message": "Subscription not found"}, 404
        return subscription_schema.dump(subscription), 200
    
class SubscriptionDeleteResource(Resource):
    @classmethod
    def delete(cls, subscription_id: int):
        subscription = Subscription.find_by_id(subscription_id)

        if not subscription:
            return {"message": "Subscription not found"}, 404
        subscription.delete_from_db()
        return {"message": "Subscription deleted successfully"}, 200    
    

