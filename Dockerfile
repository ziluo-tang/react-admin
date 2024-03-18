FROM node:16 AS builder

LABEL author="tangxiaoxin"

LABEL email="1302947749@qq.com"

RUN apt-get update

RUN apt-get install git -y

WORKDIR /app

RUN git clone https://github.com/ziluo-tang/react-admin.git /react-admin

WORKDIR /react-admin

RUN yarn

RUN yarn build

FROM nginx:latest

WORKDIR /app/react-admin

COPY build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]