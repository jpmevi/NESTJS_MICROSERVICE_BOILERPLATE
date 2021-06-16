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
$ docker compose up -d mysqlclient
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