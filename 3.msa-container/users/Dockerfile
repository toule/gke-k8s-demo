FROM mhart/alpine-node:latest

WORKDIR /users
ADD . .
RUN npm install
RUN npm install koa koa-router

EXPOSE 3000
CMD ["node", "server.js"]
