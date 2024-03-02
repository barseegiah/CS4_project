from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Request
from app.schemas.request import RequestSchema

request_schema = RequestSchema()

class RequestResource(Resource):
    @classmethod
    def post(cls):
        _request = request_schema.load(request.get_json())
        
        _request.save_to_db()

        return {"message": "Request created successfully."}, 201
