import express from 'express';
import { ProductStore } from '../models/product';
import { User, usersShopping } from '../models/user';
import supertest from 'supertest';

const app: express.Application = express();
const request = supertest(app);
const product = new ProductStore();
const user = new usersShopping();

describe('Producct store', () => {
    it('Should have an index method', () => {
        expect(product.index).toBeDefined();
    });

    it('Should have an show method', () => {
        expect(product.show).toBeDefined();
    });

    it('Should have an create method', () => {
        expect(product.create).toBeDefined();
    });

    it('Get all products', async () => {
        const newProduct = {
            name: 'Product test',
            price: 1000,
            category: 'Phone',
        };
        await product.create(newProduct);
        const products = await product.index();
        expect(products.length).toBeGreaterThan(0);
    });

    it('Get the product by id', async () => {
        const result = await product.show(1);
        expect(result).toEqual({
            id: 1,
            name: 'Product test',
            price: 1000,
            category: 'Phone',
        });
    });

    it('Should be connect API success route', () => {
        request.get('/products').expect(200);
    });

    it('Get all product by for API success route', () => {
        request.get('/products').expect(200);
    });

    it('Get a product by for API success route', () => {
        request
            .get('/products/1')
            .send({
                id: '1',
            })
            .expect(200);
    });

    it('Create a product for API success', () => {
        const userToken: User = {
            firstname: 'Duy',
            lastname: 'Ngo',
            username: 'ngoduy123',
            password: 'ngoduy123',
        };
        const token: string = user.generateAccessToken(userToken);
        request
            .post('/products/create')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Product test',
                price: 1000,
                category: 'Phone',
            })
            .expect(200);
    });

    it('Get five products popular', async () => {
        const result = await product.getFivePopularProduct();
        expect(result.length).not.toBeNaN();
    });
});
