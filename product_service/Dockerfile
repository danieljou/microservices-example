FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g nodemon ts-node typescript

EXPOSE 5000

CMD ["nodemon"]
