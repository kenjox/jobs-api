import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name must be provided'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email must be provided'],
      match: [
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
        'A valid email must be provided',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password must be provided'],
    },
  },
  { timestamps: true }
);

// Hash password before save
userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
});

// Generates jwt token
userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_DURATION,
  });
};

export default mongoose.model('User', userSchema);
