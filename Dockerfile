# Dockerfile  
FROM node:latest

WORKDIR /dpb

COPY . .

RUN npm i
RUN npm i -g concurrently
RUN npm i -g gulp
RUN npm link gulp

CMD npm run build

EXPOSE 8888