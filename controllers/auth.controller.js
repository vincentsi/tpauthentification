const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
require ('dotenv').config({path:'.env'})
const { signUpErrors, signInErrors } = require('../errors');


const createToken = (id) => {
  return jwt.sign({id}, process.env.APP_SECRET, {
    expiresIn: '24h'
  })
};

module.exports.signUp = async (req, res) => {
  
  console.log(req.body)
  const {firstName,lastName, email, password} = req.body
  
  try {
    const user = await UserModel.create({firstName,lastName, email, password });
   res.redirect('/login');
  }
  
  catch(err) {
    // res.redirect('/');
    const errors = signUpErrors(err);
    res.status(200).send({ errors })
  }

}

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true });
    res.redirect('/dashboard');
    // res.status(200).json({ user: user._id})
  } catch (err){
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
}

module.exports.logout = (req, res) => {
  res.cookie('jwt', '');
  res.redirect('/');
}

