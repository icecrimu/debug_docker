FROM node:14.4.0-alpine3.12

RUN mkdir -p /var/www/app

WORKDIR /var/www/app

COPY . .