import express, { Request, Response } from 'express';
import { Orders } from '../models/order';
import verifyAuthToken from '../middleware/auth';

const order = new Orders();

const index = async (req: Request, res: Response) => {
    try {
        const products = await order.index();
        res.status(200).json(products);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const getOrderByUserId = async (req: Request, res: Response) => {
    try {
        const orders = await order.getOrderByUserId(req.params.userId);
        res.status(200).json(orders);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const orderRoutes = (app: express.Application) => {
    app.get('/orders', verifyAuthToken, index);
    app.get('/order-product/:userid', verifyAuthToken, getOrderByUserId);
};

export default orderRoutes;
