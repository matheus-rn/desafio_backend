FROM node:12.14.0

RUN mkdir -p /usr/src
WORKDIR /usr/app

COPY . .

RUN npm i -g @adonisjs/cli@4.0.12

RUN yarn

EXPOSE 3000
