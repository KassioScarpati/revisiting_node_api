FROM node:16-alpine

WORKDIR '/app'

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD npm run setup:prod && npm start
