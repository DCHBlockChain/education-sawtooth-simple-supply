#!/usr/bin/env bash
npm run dev

# /etc/nginx/nginx.conf

# docker build -t  gcr.io/app-ui-217401/doctorchainui:1.8.4 .
# docker run   -p 8080:8080 -it gcr.io/app-ui-217401/doctorchainui:1.7.8


#
# docker build -f Dockerfile-nginx -t  gcr.io/app-ui-217401/doctorchain-nginx:1.0.0 .

#http-server -p 8080 #-S -C ./ssl/cert.pem -o