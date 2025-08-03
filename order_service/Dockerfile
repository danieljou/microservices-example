FROM python:3.11

RUN apt-get update && apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    build-essential \
    && rm -rf /var/lib/apt/lists/*


WORKDIR /app

COPY . .


RUN pip install --upgrade pip && pip install -r requirements.txt

CMD ["flask", "run", "--host=0.0.0.0", "--port=6000"]
