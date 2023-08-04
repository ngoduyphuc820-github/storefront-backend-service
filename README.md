## Project name: Storefront Backend Project
Build an express server using typescript to serve orders, shopping carts, manage products and users.

## Installation
#### 1. Create a database postgres on local.
```sh
database: shopping, username:postgres, password: Password123
```
#### 2. Create .env file and put all enviroment variable.
```sh
PROSTGRES_HOST = 127.0.0.1
PROSTGRES_DB = shopping
PROSTGRES_USER = postgres
PROSTGRES_PASSWORD = Password123
PROSTGRES_DB_TEST = shopping_test
TOKEN_SECRET = phucnd12
ENV = dev
PORT = 3000
```
Running: ```'db-migrate up'``` to creation database.

#### 3. Install dependencies and start the server.
```sh
npm i
npm start
```

## Instruction
Scripts to run the build to tsc, nodemon server.ts, tests, reset test database, prettier, and ESlint for the project or you can see those in the package.json file
```sh
npm run build
npm run dev
npm run test
npm run prettier
npm run lint
```
