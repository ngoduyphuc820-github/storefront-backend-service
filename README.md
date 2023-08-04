## Project name: Storefront Backend Project
Build an express server using typescript to serve orders, shopping carts, manage products and users.
## Installation

#### 1. Clone the repository:
```git clone https://github.com/ngoduyphuc820-github/storefront-backend-service.git```
#### 2. Create a database postgres on local and availble running.
```sh
database: shopping, username:postgres, password: Password123
database-test: shopping_test, username:postgres, password: Password123
```

#### 4. Install dependencies
```sh
npm i
```
#### 3. Create .env file and put all enviroment variable.
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
Note: sudo npm install -g db-migrate for mac if it does not run db-migrate up.

## Instruction

Using the postman to test the API.
#### API Endpoints
##### Note: [token required] will be get when the user is created successfully
##### Users
- Create [token required]: 'http://localhost:3000/users' [POST]
- Index [token required]: 'http://localhost:3000/uers' [GET]
- Show [token required]: 'http://localhost:3000/users/:id' [GET]
- Example: The payload for creating a user { firstname": "Duy", "lastname": "Ngo", "username": "ngoduy123", "password": "ngoduy123" }

##### Products
- Index: 'http://localhost:3000/products' [GET]
- Show: 'http://localhost:3000/products/:id' [GET]
- Create [token required]: 'http://localhost:3000/products' [POST]
- Example: The payload for creating a product. { "name": "Product 1", "price": 100, "category": "Phone" }

##### Orders
- Index [token required]: 'http://localhost:3000/orders' [GET]
- Current Order by user (args: user id)[token required]: 'http://localhost:3000/order-product/:userid

#### Scripts
Scripts to start, build, tests, reset test database, prettier, and ESlint for the project or you can see those in the package.json file
```sh
npm start
npm run build
npm run dev
npm run test
npm run prettier
npm run lint
npm run reset-test-db
```
