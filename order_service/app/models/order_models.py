from sqlalchemy import Column, Integer, String, Float, DateTime , orm
from datetime import datetime
from ..database import Base


class Order(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True)
    customer_name = Column(String(100), nullable=False)
    customer_email = Column(String(120), nullable=False)
    status = Column(String(50), default='pending')  # e.g., pending, paid, shipped
    total_amount = Column(Float, nullable=False, default=0.0)
    created_at = Column(DateTime, default=datetime.now)

    items = orm.relationship("OrderItem", backref="order", cascade="all, delete-orphan", lazy=True)

    def __repr__(self):
        return f"<Order {self.id} - {self.customer_name}>"


