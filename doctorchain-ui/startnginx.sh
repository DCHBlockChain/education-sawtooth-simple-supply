#!/bin/bash
#cat /usr/local/etc/nginx/nginx.conf
#sudo nginx -s stop
sudo nginx  -c  /Users/george/doctorchain-UI/nginx/nginx-lcl.conf
#sudo nginx  -c  /Users/george/doctorchain-UI/nginx/nginx-dev.conf



#docker run \
#  --name doctorchain-nginx \
#  -p 80:80 \
#  -p 443:443 \
#  -d \
#  launcher.gcr.io/google/nginx1




  #-v /my/persistent/dir/www:/usr/share/nginx/html \
