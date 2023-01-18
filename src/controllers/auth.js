import CustomError from '../errors/custom-errors.js';
import User from '../models/user.js';

const register = async (req, res, next) => {
  const user = await User.create(req.body);

  return res.status(201).json(token);
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new CustomError({ statusCode: 400, message: 'Invalid username or password' }));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new CustomError({ statusCode: 400, message: 'Invalid username or password' }));
  }

  const token = user.generateJwtToken();

  res.json({ token });
};

export { register, login };
