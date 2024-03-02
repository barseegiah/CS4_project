from datetime import datetime, timedelta
import json
from flask import request 
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Payment
from app.schemas.payment import PaymentSchema

payment_schema = PaymentSchema()

class PaymentResource(Resource):
    def post(self):
        json_data = request.get_json()
        payment = payment_schema.load(json_data)

        # Assuming your Payment model has a save_to_db method
        payment.create_payment()  # Uncomment this line to save to the database

        return {"message": "Payment created successfully."}, 201
