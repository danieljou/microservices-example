FROM node:20

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1


EXPOSE 3000

CMD ["npm", "run", "dev"]