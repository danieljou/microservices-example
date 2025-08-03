from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, make_response
from marshmallow import ValidationError

from ..models.order_models import Order
from app.database import db_session
from app.schemas import OrderSchema

# Création du namespace pour les orders
api = Namespace('orders', description='Order related operations')

# Modèles pour la documentation Swagger
order_model = api.model('Order', {
    'id': fields.Integer(readOnly=True, description='The order unique identifier'),
    'user_id': fields.Integer(required=True, description='The user who made the order'),
    'product_id': fields.Integer(required=True, description='The product ordered'),
    'quantity': fields.Integer(required=True, description='Quantity of products ordered'),
    'status': fields.String(required=True, description='Order status'),
    'created_at': fields.DateTime(readOnly=True, description='Order creation date')
})

order_schema = OrderSchema()
orders_schema = OrderSchema(many=True)

@api.route('/')
class OrderList(Resource):
    @api.doc('list_orders')
    @api.marshal_list_with(order_model)
    def get(self):
        """List all orders"""
        orders = Order.query.all()
        return orders_schema.dump(orders)

    @api.doc('create_order')
    @api.expect(order_model)
    @api.response(201, 'Order successfully created')
    @api.response(400, 'Validation error')
    def post(self):
        """Create a new order"""
        data = request.json
        schema = OrderSchema()
        try:
            validated_data = schema.load(data)
        except ValidationError as err:
            return make_response(jsonify({"errors": err.messages}), 400)

        order = Order(**validated_data)
        db_session.add(order)
        db_session.commit()
        return make_response(jsonify({"id": order.id}), 201)

@api.route('/<int:order_id>')
@api.param('order_id', 'The order identifier')
@api.response(404, 'Order not found')
class OrderDetail(Resource):
    @api.doc('get_order')
    @api.marshal_with(order_model)
    def get(self, order_id):
        """Fetch an order given its identifier"""
        order = Order.query.get_or_404(order_id)
        return order_schema.dump(order)

    @api.doc('update_order')
    @api.expect(order_model)
    @api.response(200, 'Order successfully updated')
    @api.response(400, 'Validation error')
    @api.marshal_with(order_model)
    def put(self, order_id):
        """Update an order"""
        order = Order.query.get_or_404(order_id)
        json_data = request.get_json()

        errors = order_schema.validate(json_data, partial=True)
        if errors:
            return jsonify(errors), 400

        updated_order = order_schema.load(json_data, instance=order, partial=True)
        db_session.commit()
        return order_schema.dump(updated_order)

    @api.doc('delete_order')
    @api.response(200, 'Order successfully deleted')
    def delete(self, order_id):
        """Delete an order"""
        order = Order.query.get_or_404(order_id)
        db_session.delete(order)
        db_session.commit()
        return jsonify({"message": "Order deleted"})