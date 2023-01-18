const register = (req, res, next) => {
  res.json('register');
};

const login = (req, res, next) => {
  res.json('login');
};

export { register, login };
