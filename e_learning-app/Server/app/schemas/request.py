from app import ma
from app.models import Request

class RequestSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Request
        dumb_only = ("id",)
        include_fk = True
        load_instance = True
