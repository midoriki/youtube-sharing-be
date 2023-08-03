FROM node:16.20-alpine

EXPOSE 4000

ENV NODE_PATH=/usr/local/lib/node_modules

RUN npm i -g esm dotenv

WORKDIR /home/app

COPY package.json /home/app/

RUN npm i

COPY . .

RUN npm run build

ENTRYPOINT ["sh", "./scripts/start.sh"]