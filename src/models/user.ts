import Client from '../database';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const { TOKEN_SECRET } = process.env;

export type User = {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
};

export class usersShopping {
    generateAccessToken(user: User) {
        return jwt.sign({ user }, TOKEN_SECRET as string);
    }

    async index(): Promise<User[]> {
        try {
            const conn = await Client.connect();
            const sql = `SELECT * FROM users`;
            const result = await conn.query(sql);
            const users = result.rows;
            conn.release();
            return users;
        } catch (err) {
            throw new Error(`Could not get users. Error ${err}`);
        }
    }

    async show(id: number): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql = `SELECT * FROM users WHERE id=($1)`;
            const result = await conn.query(sql, [id]);
            const user = result.rows[0];
            conn.release();
            return user;
        } catch (err) {
            throw new Error(`Could not find user ${id}. Error ${err}`);
        }
    }

    async create(user: User): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql =
                'INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)';
            const result = await conn.query(sql, [
                user.firstname,
                user.lastname,
                user.username,
                user.password,
            ]);
            const newUser = result.rows[0];
            conn.release();
            return newUser;
        } catch (err) {
            throw new Error(`Could not create user ${user} Error: ${err}`);
        }
    }
}
