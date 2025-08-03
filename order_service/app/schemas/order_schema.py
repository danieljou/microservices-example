# serializers/order_serializer.py
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field, fields
from app.models.order_models import Order
from .order_item_schema import OrderItemSchema

class OrderSchema(SQLAlchemySchema):
    class Meta:
        model = Order
        load_instance = True

    id = auto_field()
    customer_name = auto_field()
    customer_email = auto_field()
    status = auto_field()
    total_amount = auto_field()
    created_at = auto_field()
    # items = fields.List(fields.Nested(OrderItemSchema))
