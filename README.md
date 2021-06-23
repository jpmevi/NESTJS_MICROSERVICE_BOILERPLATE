<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">A NestJS and MySQL boilerplate for building microservices.</p>


## Description

[NestJS](https://docs.nestjs.com/) framework TypeScript starter boilerplate.

## Installation

```bash
$ npm install
```

## Running the database

```bash
# Run only the first time
$ mkdir docker/mysql_data

$ cd docker
$ docker network create -d bridge mynetwork
$ docker-compose up -d mysqlclient
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app with a docker container
$ docker run --env-file .env -e TYPEORM_HOST='mysql' --network mynetwork -p {extport}:{port} ecommerce-admin-test

As for the {port} use the same as described in the .env file, if this var is not set the default port is 3000.
We are passing TYPEORM_HOST='mysql' to override the .env file TYPEORM_HOST which is usually set to localhost.
The mysql service is called 'mysql' in the docker-compose.yml file. As for the {extport} you can use any one you
want that is not used
For example
$ docker run --env-file .env -e TYPEORM_HOST='mysql' --network mynetwork -p 3000:3000 ecommerce-admin-test
or
$ docker run --env-file .env -e TYPEORM_HOST='mysql' --network mynetwork -p 4000:3000 ecommerce-admin-test

## Deploy to development server
To deploy to development first push your branch to the repo, do not push to main or develop
$ git add .
$ git commit -m "type: message"
$ git push 
After that check the latest release with git tag
$ git tag
releases/0.0.1
releases/0.0.10
releases/0.0.11
releases/0.0.12
releases/0.0.13
releases/0.0.14
releases/0.0.15
releases/0.0.2
releases/0.0.3
releases/0.0.4
releases/0.0.5

Or you could use describe to get the latest tag
$ git describe --tag
releases/0.0.15
So the next release probably is going to be 0.0.16
$ git tag releases/0.0.16
And push your tag
$ git push origin --tags

And this will try to deploy the latest changes in the develop environment in AWS ECS

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [TradeEC](https://trade.ec/contacto.html)
- Website - [https://trade.ec](https://trade.ec)

## Upcoming features

<ul>
<li>[] Static testing</li>
<li>[] Custom validators</li>
<li>[] Config SNS & SQS</li>
<li>[] SQS Listeners</li>
<li>[] Guards</li>
<li>[] Providers </li>
<li>[] Unit testing</li>
<li>[] Task Scheduling - Commnands</li>
<li>[] Custom transformers</li>
<li>[] Node in docker compose</li>
<li>[] Github Actions</li>
<li>[] Repository events and observers/listeners</li>
</ul>