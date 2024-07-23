FROM node:lts-alpine

ARG CLIENT_PORT=5173

WORKDIR /app

COPY ./package*.json .

RUN npm install

COPY . .

COPY .env .

EXPOSE ${CLIENT_PORT}

CMD ["npm", "run", "dev"]
