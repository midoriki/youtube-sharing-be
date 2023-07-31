FROM node:18.17

EXPOSE 4000

RUN apt-get update
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

WORKDIR /home/app

COPY package.json /home/app/

RUN npm i

COPY . /home/app

RUN npm run build

ENTRYPOINT ["sh", "./scripts/start.sh"]