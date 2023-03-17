FROM node:lts-alpine

RUN addgroup app && adduser -S -G app app

RUN mkdir /app && chown app:app /app

USER app

WORKDIR /app

COPY ./package.json ./package-lock.json ./

# COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN ["node", "server.js"]