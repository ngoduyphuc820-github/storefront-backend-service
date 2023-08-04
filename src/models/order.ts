import Client from '../database';

export class Orders {
    async index(): Promise<Orders[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Can not get products. Error ${err}`);
        }
    }

    async getOrderByUserId(userId: string) {
        try {
            const conn = await Client.connect();
            const sql = `SELECT * FROM orders WHERE user_id=($1)`;
            const result = await conn.query(sql, [userId]);
            conn.release();

            return result.rows;
        } catch (err) {
            throw new Error(`Can not get order products. Error ${err}`);
        }
    }
}
