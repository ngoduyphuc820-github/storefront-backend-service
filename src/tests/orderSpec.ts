import express from 'express';
import { Orders } from '../models/order';
import { User, usersShopping } from '../models/user';
import supertest from 'supertest';

const app: express.Application = express();
const request = supertest(app);
const user = new usersShopping();
const order = new Orders();

describe('Order store', () => {
    it('Should have an index method', () => {
        expect(order.getOrderByUserId).toBeDefined();
    });

    it('Get order success ', async () => {
        const result = await order.getOrderByUserId('1');
        expect(result.length).not.toBeNaN();
    });

    it('Create oder success - route', () => {
        const userToken: User = {
            firstname: 'Duy',
            lastname: 'Ngo',
            username: 'ngoduy123',
            password: 'ngoduy123',
        };
        const token: string = user.generateAccessToken(userToken);
        request
            .get('/order-product/:userid')
            .set('Authorization', `Bearer ${token}`)
            .send({
                id: '1',
            })
            .expect(200);
    });
});
