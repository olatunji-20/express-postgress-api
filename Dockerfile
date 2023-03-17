FROM node:lts-alpine

RUN addgroup app && adduser -S -G app app

RUN mkdir /app && chown app:app /app

USER app

WORKDIR /home/app

COPY ./package.json ./

# COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]