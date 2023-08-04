import Client from '../database';

export type Product = {
    id?: number;
    name: string;
    price: number;
    category?: string;
};

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            const proudcts = result.rows;
            conn.release();
            return proudcts;
        } catch (err) {
            throw new Error(`Could not get products. Error ${err}`);
        }
    }

    async show(id: number): Promise<Product> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM products WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            const proudcts = result.rows[0];
            conn.release();
            return proudcts;
        } catch (err) {
            throw new Error(`Could not find product ${id}. Error: ${err}`);
        }
    }

    async create(product: Product): Promise<Product> {
        try {
            const conn = await Client.connect();
            const sql =
                'INSERT INTO products (name, price, category) VALUES ($1, $2, $3)';
            const result = await conn.query(sql, [
                product.name,
                product.price,
                product.category,
            ]);
            const newProudct = result.rows[0];
            conn.release();
            return newProudct;
        } catch (err) {
            throw new Error(
                `Could not create product ${product}. Error: ${err}`
            );
        }
    }

    async getFivePopularProduct(): Promise<Product[]> {
        try {
            const conn = await Client.connect();
            const sql =
                'SELECT * FROM order_products ORDER BY quantity DESC LIMIT 5';
            const result = await conn.query(sql);
            const poppularProudcts = result.rows;
            conn.release();
            return poppularProudcts;
        } catch (err) {
            throw new Error(`Could not get popular products. Error: ${err}`);
        }
    }
}
