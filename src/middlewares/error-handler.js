import CustomError from '../errors/custom-errors.js';

export default (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  // TODO: Check model errors

  // Generic errors
  return res.status(500).json({ message: 'Whoops something went wrong. Please try again later' });
};
