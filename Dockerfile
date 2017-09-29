FROM node:8.6-alpine

RUN mkdir -p /usr/julia-ousse

ADD . /usr/julia-ousse

WORKDIR /usr/julia-ousse
RUN npm install --only=production

RUN ls -la

EXPOSE 8080
CMD [ "npm", "start" ]
