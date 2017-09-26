FROM node:7.10-slim

RUN mkdir -p /usr/julia-ousse

ADD . /usr/julia-ousse

WORKDIR /usr/julia-ousse
RUN npm install

RUN ls -la

EXPOSE 8080
CMD [ "npm", "start" ]
