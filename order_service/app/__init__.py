from flask import Flask
from flask_cors import CORS
from .models import *
from .database import Base, engine


def init_db():

    import app.models

    Base.metadata.create_all(bind=engine)

def create_app():
    app = Flask(__name__, )
    CORS(app)



    init_db()

    return app
