import express from 'express';

import asyncWrapper from '../middlewares/async-wrapper.js';

import { getAllUsers, deleteUserById } from '../controllers/users.js';

const router = express.Router();

router.get('/', asyncWrapper(getAllUsers));

router.delete('/:id', asyncWrapper(deleteUserById));

export default router;
