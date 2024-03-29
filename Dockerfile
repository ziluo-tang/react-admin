FROM node:16 AS builder

LABEL author="tangxiaoxin"

LABEL email="1302947749@qq.com"

RUN apt-get update

RUN apt-get install git -y

RUN git clone https://github.com/ziluo-tang/react-admin.git /app/react-admin

WORKDIR /app/react-admin

RUN yarn

RUN yarn build

FROM nginx:latest

COPY --from=builder /app/react-admin/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]