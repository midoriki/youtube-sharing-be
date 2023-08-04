# Youtube video sharing app BE

This project is the backend of Youtube video sharing app.

Powered by [Express](https://expressjs.com/).

## Development guide

### Prerequisites

- NodeJS version 16.20

- Postgresql database (available in the [docker](#docker) section)

- [Docker](https://docs.docker.com/desktop/)/[Docker compose](https://docs.docker.com/compose/install/) (if you want to run project in docker)

It's recommended to use [nvm](https://github.com/nvm-sh/nvm) as a Version manager

### Submodule

The [frontend](https://github.com/midoriki/youtube-sharing-fe) is included as a submodule of this project.

- Use `--recursive` when cloning this project

- Or run `git submodule init` and `git submodule update`

to pull frontend repo.

### Docker

You can run this project inside a `docker` container or by using `npm` as described bellow in the [Setup](#setup) section.

The `docker-compose.yml` file contains setup for 3 containers:

- `db` - postgresql db
- `be` - node backend
- `nginx` - serving frontend's built code

#### To quickly start the whole project in local run this command (this need [submodule](#submodule) to be fully pulled)

`docker-compose up`

or

`docker-compose up -d` to run as daemon

then add an entry to `/etc/config`

```
127.0.0.1 youtube-sharing-app.lc
```

then the app should available at http://youtube-sharing-app.lc

#### To only run backend and db

`docker-compose up db be`

Backend api then can be access at `http://localhost:4000`

#### Only start db

`docker-compose up db`

### Setup

Prerequisite: either `db` container is running or start your own postgresql instance in local

Clone project

`git clone git@github.com:midoriki/youtube-sharing-be.git`

`cd youtube-sharing-be`

Install dependencies

`npm install`

Make a copy of .env.example to hold project's variables

`cp .env.example .env`

Modify `DB` section in `.env` to match your config if needed

Run dev script

`npm run dev`

By default project will be run at port [4000](http://localhost:4000).

## Libraries

### Express

[Express](https://expressjs.com/) is the backbone of this project.

### Authentication

Project uses `JWT` via `Authorization: Bearer {token}` header to authenticate user, with the help of [passport-jwt](https://www.passportjs.org/packages/passport-jwt/)

### ORM

[TypeORM](https://typeorm.io/) is the choosen one.

### WebSocket

[Socket.io](https://socket.io/) for realtime notification

### Youtube API

Is used for fetching video's data, even though we are not using any SDK, instead query directly from [videos api](https://developers.google.com/youtube/v3/docs/videos) using [axios](https://axios-http.com/docs/intro)

## Deployment

`docker-compose.yml` should be sufficient for a simple deployment in production.

Clone project and run

`docker-compose up -d`

The only thing need to be change is `NODE_ENV` variable in `.env` file should be updated to `production`, then `scripts/start.sh` will know to build and start backend in production mode.

## Scripts

### `npm run dev`

Runs the app in the development mode.\
Send request to [http://localhost:4000](http://localhost:4000).

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Launches the test runner in the interactive watch mode and generate coverage report.

### `npm run build`

Builds the app for production to the `dist` folder

### `npm run start`

Start project with built source
