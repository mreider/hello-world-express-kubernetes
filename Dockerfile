FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9998

CMD ["node", "index.js"]