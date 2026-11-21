import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/authRoutes.js';
import homeRouter from './routes/homeRouter.js';

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('/', homeRouter);
app.use('/auth', authRouter);

export default app; 