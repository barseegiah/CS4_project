from marshmallow import Schema, fields

class PaymentSchema(Schema):
    user_id = fields.Integer(required=True)
    username = fields.String(required=True)
    amount = fields.Float(required=True)
    status = fields.String(default='Pending')
