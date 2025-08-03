
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field
from app.models.order_item import OrderItem

class OrderItemSchema(SQLAlchemySchema):
    class Meta:
        model = OrderItem
        load_instance = True

    id = auto_field()
    order_id = auto_field()
    product_name = auto_field()
    quantity = auto_field()
    price_per_unit = auto_field()
