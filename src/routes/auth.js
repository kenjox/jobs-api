import express from 'express';

import asyncWrapper from '../middlewares/async-wrapper.js';
import { register, login } from '../controllers/auth.js';

const router = express.Router();

// Register route
router.post('/register', asyncWrapper(register));

// Login route
router.post('/login', asyncWrapper(login));

export default router;
