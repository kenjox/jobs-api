import CustomError from '../errors/custom-errors.js';
import User from '../models/user.js';

const getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({ users });
};

const deleteUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return next(new CustomError({ statusCode: 400, message: `No user with id ${id} found` }));
  }

  return res.status(200).json({ message: 'User deleted' });
};

export { getAllUsers, deleteUserById };
