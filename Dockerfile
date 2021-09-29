# syntax=docker/dockerfile:1

FROM node:12.22.0
WORKDIR /app
COPY ./ /app
RUN npm install 
CMD [ "node", "index.js" ]

