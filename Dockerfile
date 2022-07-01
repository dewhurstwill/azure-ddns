FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN npm ci --only=production

COPY . .

CMD [ "node", "main.js" ]
