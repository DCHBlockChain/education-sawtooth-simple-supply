FROM node:latest
WORKDIR /app
ADD package.json /app
RUN ls
RUN npm install
RUN npm install http-server -g

ADD . /app
RUN pwd && ls .
EXPOSE 8080 80 443
RUN cd /app && npm run build
RUN pwd
ADD ./ssl/cert.pem   /app
ADD ./ssl/key.pem /app
#ADD ./ssl/cert.pem  /app/dist
#ADD ./ssl/key.pem  /app/dist
RUN ls /app/dist && pwd
#CMD http-server -p 80
ENTRYPOINT ["/app/run.sh"]
#-S -C cert.pem -o
#-P http://0.0.0.0:5000
# http-server -p 8000 -o -S
# http-server -S -C cert.pem -o
#CMD npm run dev
