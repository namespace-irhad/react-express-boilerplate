import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

// import databaseConfig from './config/db.config';
// import { NODE_ENV } from './config/env';

import helloWorldRoutes from './api/helloWorld';

// Create database connection pool

const app = express();

// Max 500 requests per 5 minutes per IP address
const limiter = rateLimit({ windowMs: 5 * 60 * 1000, max: 500 });

// Setting up middleware
app.enable('trust proxy');
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(compression());
app.use(limiter);
app.use(morgan('combined'));

app.use('/api/v1', helloWorldRoutes);

export default app;
