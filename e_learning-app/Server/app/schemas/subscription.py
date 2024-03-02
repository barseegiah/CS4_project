from app import ma
from app.models import Subscription

class SubscriptionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Subscription
        dumb_only = ("id",)
        include_fk = True
        load_instance = True
