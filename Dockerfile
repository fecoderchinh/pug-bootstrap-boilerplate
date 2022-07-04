# Dockerfile  
FROM node:14-alpine

WORKDIR /pug-bootstrap-boilerplate

ADD package.json gulpfile.js serve.json /pug-bootstrap-boilerplate

RUN npm install

ADD gulpfile.js package.json serve.json /pug-bootstrap-boilerplate

EXPOSE 8888