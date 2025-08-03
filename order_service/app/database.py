from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base

engine = create_engine(
    'mysql+pymysql://root:password@db_order/orders_db', echo=True)
db_session = scoped_session(
    sessionmaker(
        autocommit=False,
        autoflush=False,
        bind=engine,
    ),
)

Base = declarative_base()

Base.query = db_session.query_property()



