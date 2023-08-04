/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NUll,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);