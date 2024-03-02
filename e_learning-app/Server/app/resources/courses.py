from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Payment, Courses  # Import the Course model
from app.schemas.payment import PaymentSchema
from app.schemas.courses import CoursesSchema  # Import the Course schema

payment_schema = PaymentSchema()
course_schema = CoursesSchema()

class PaymentResource(Resource):
    def post(self):
        json_data = request.get_json()
        payment = payment_schema.load(json_data)

        # Assuming your Payment model has a save_to_db method
        payment.create_payment()  # Uncomment this line to save to the database

        return {"message": "Payment created successfully."}, 201


class CourseResource(Resource):
    @jwt_required()  # Requires a valid JWT token to access this resource
    def post(self):
        json_data = request.get_json()
        course = course_schema.load(json_data)

        # Assuming your Course model has a save_to_db method
        course.save_to_db()  # Uncomment this line to save to the database

        return {"message": "Course created successfully."}, 201
