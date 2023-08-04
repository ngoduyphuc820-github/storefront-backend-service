import express from 'express';
import { User, usersShopping } from '../models/user';
import supertest from 'supertest';

const app: express.Application = express();
const request = supertest(app);
const user = new usersShopping();

describe('User store', () => {
    it('Should have an index method', () => {
        expect(user.index).toBeDefined();
    });

    it('Should have an index method', () => {
        expect(user.index).toBeDefined();
    });

    it('Create user success for call API - route', () => {
        const userToken: User = {
            firstname: 'Duy',
            lastname: 'Ngo',
            username: 'ngoduy123',
            password: 'ngoduy123',
        };
        const token: string = user.generateAccessToken(userToken);
        request
            .post('/users/create')
            .set('Authorization', `Bearer ${token}`)
            .send(userToken)
            .expect(200);
    });
});
