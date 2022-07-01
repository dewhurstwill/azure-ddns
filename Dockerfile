FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN npm ci --omit=dev

COPY . .

CMD [ "node", "main.js" ]
