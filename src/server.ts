import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import productRoutes from './handlers/product-routes';
import userRoutes from './handlers/users-routes';
import orderRoutes from './handlers/order-routes';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
});

productRoutes(app);
userRoutes(app);
orderRoutes(app);

app.listen(PORT, function () {
    console.log(`starting app on: ${PORT}`);
});
