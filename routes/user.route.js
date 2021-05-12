var express= require('express');
var jwt= require('jsonwebtoken');
var userRouter=express.Router();

var UserController = require('../controllers/user.controller');

var AuthConfig= require('../middlewares/auth.middleware');

// http://localhost:17899/user/login
userRouter.post('/register',UserController.registerUser);

userRouter.post('/login',UserController.loginUser);

userRouter.post('/checkusername',UserController.checkUsername);

userRouter.post('/changePassword',UserController.changePassword);

module.exports=userRouter;
