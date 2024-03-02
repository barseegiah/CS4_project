from marshmallow import Schema, fields

class CoursesSchema(Schema):
    course_id = fields.Integer(dump_only=True)  # Assuming course_id is automatically generated
    course_name = fields.String(required=True)
    description = fields.String(required=True)
    courseslevel = fields.String(required=True)
    coursesprice = fields.String(required=True)
    author_id = fields.Integer(required=True)  # Assuming you have an instructor associated with the course

    # You can add more fields based on your requirements

    # Example of additional fields:
    start_date = fields.DateTime(required=True)
    end_date = fields.DateTime(required=True)
