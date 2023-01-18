import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import connectToDB from './db/connect.js';
import errorHandlerMiddleware from './middlewares/error-handler.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', usersRoutes);
app.use(errorHandlerMiddleware);

async function start() {
  try {
    await connectToDB(process.env.MONGO_URI);
    console.log('🎉🎉🎉 Successfully connected to database');
    app.listen(PORT, () => console.log(`🚀🚀🚀 Server running at port ${PORT}`));
  } catch (error) {
    console.error({ error });
  }
}

start();
