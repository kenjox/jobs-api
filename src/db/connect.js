import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectToDB = async (url) => {
  return mongoose.connect(url);
};

export default connectToDB;
