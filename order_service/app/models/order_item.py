from sqlalchemy import Column, Integer, String, Float, ForeignKey
from ..database import Base



class OrderItem(Base):
    __tablename__ = 'order_items'

    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    product_name = Column(String(100), nullable=False)
    quantity = Column(Integer, nullable=False, default=1)
    price_per_unit = Column(Float, nullable=False)

    def __repr__(self):
        return f"<OrderItem {self.product_name} x{self.quantity}>"
