FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN apk update && rm -rf /usr/share/nginx/html/*
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY app/dist /usr/share/nginx/html
