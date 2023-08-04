import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';
import verifyAuthToken from '../middleware/auth';

const store = new ProductStore();

const index = async (req: Request, res: Response) => {
    try {
        const products = await store.index();
        res.status(200).json(products);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const show = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const product = await store.show(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const create = async (req: Request, res: Response) => {
    try {
        const product: Product = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        const newProduct = await store.create(product);
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const getFivePopularProduct = async (req: Request, res: Response) => {
    try {
        const fiveProductPopular = await store.getFivePopularProduct();
        res.status(200).json(fiveProductPopular);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const productRoutes = (app: express.Application) => {
    app.get('/products', verifyAuthToken, index);
    app.get('/products/:id', verifyAuthToken, show);
    app.post('/products/create', verifyAuthToken, create);
    app.get('/products-five-popular', getFivePopularProduct);
};

export default productRoutes;
