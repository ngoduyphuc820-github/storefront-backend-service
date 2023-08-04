import { Request, Response, Application } from 'express';
import { User, usersShopping } from '../models/user';

const user = new usersShopping();

const index = async (req: Request, res: Response) => {
    try {
        const result = await user.index();
        res.status(200).json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const show = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const result = await user.show(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const create = async (req: Request, res: Response) => {
    try {
        const newUser: User = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
        };
        await user.create(newUser);
        const token = user.generateAccessToken(newUser);
        res.status(200).json(token);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const userRoutes = (app: Application) => {
    app.get('/users', index);
    app.get('/users/:id', show);
    app.post('/users/create', create);
};

export default userRoutes;
