FROM node

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install