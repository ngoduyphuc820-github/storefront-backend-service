# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index: 'http://localhost:3000/products' [GET]
- Show: 'http://localhost:3000/products/:id' [GET]
- Create [token required]: 'http://localhost:3000/products' [POST]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]: 'http://localhost:3000/uers' [GET]
- Show [token required]: 'http://localhost:3000/users/:id' [GET]
- Create N[token required]: 'http://localhost:3000/users' [Post]

#### Orders
- Index [token required]: 'http://localhost:3000/orders' [GET]
- Current Order by user (args: user id)[token required]: 'http://localhost:3000/order-product/:userid
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
- id: serial
- name: varchar(100) NOT NULL
- price: integer NOT NULL
- [OPTIONAL] category: varchar(100)

#### User
- id: serial
- firstName: varchar(100) NOT NULL
- lastName: varchar(100) NOT NULL
- username: varchar(100) NOT NULL
- password: varchar(100) NOT NULL

#### Orders-Product
- id: serial
- id of each product in the order: type id of the order table
- quantity of each product in the order: number
- user_id: type id of the user table
- status of order (active or complete): varcahr(50)

#### Orders
-id -- serial
-user_id: type id of the user table

