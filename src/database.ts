import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

let client: Pool = new Pool({});

const {
    PROSTGRES_HOST,
    PROSTGRES_DB,
    PROSTGRES_DB_TEST,
    PROSTGRES_USER,
    PROSTGRES_PASSWORD,
    ENV,
} = process.env;

if (ENV === 'test') {
    client = new Pool({
        host: PROSTGRES_HOST,
        database: PROSTGRES_DB_TEST,
        user: PROSTGRES_USER,
        password: PROSTGRES_PASSWORD,
    });
}

if (ENV === 'dev') {
    client = new Pool({
        host: PROSTGRES_HOST,
        database: PROSTGRES_DB,
        user: PROSTGRES_USER,
        password: PROSTGRES_PASSWORD,
    });
}

export default client;
