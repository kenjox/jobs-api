import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/api/v1/auth', authRoutes);

async function start() {
  try {
    app.listen(PORT, () => console.log(`🚀🚀🚀 Server running at port ${PORT}`));
  } catch (error) {
    console.error({ error });
  }
}

start();
