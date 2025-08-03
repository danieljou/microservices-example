from fastapi import FastAPI
import httpx

app = FastAPI()

# Route vers le user service (Django)
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    async with httpx.AsyncClient() as client:
        resp = await client.get(f"http://user_service:8000/api/users/{user_id}")
        return resp.json()

# Route vers le product service (Express)
@app.get("/products/{product_id}")
async def get_product(product_id: str):
    async with httpx.AsyncClient() as client:
        resp = await client.get(f"http://product_service:5000/products/{product_id}")
        return resp.json()

# Route vers le order service (Flask)
@app.get("/orders/{order_id}")
async def get_order(order_id: int):
    async with httpx.AsyncClient() as client:
        resp = await client.get(f"http://order_service:6000/orders/{order_id}")
        return resp.json()
