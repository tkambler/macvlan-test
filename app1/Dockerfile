FROM mhart/alpine-node:8.6.0
ENV TERM=xterm-256color
COPY package.json package-lock.json /opt/app/
WORKDIR /opt/app
RUN npm i
COPY . /opt/app/
ENTRYPOINT ["node", "index.js"]
EXPOSE 80
