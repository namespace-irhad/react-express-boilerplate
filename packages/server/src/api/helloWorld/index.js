import express from 'express';
import * as controller from './controller';

const router = express.Router();

router.get(`/hello-world`, controller.getHelloWorld);

export default router;
