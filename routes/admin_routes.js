const User = require('../models/user_model')
const express = require('express');
const Router = express.Router();
const {GetUsers,DeleteUser,Addtech,Deletetech,Updatetech} = require('../controllers/admin_controller');
const {ValidateUser , validationResult,UserLoginValidation}= require('../middlewares/validation/validator');


Router.post('/users',GetUsers);
Router.delete('/users/:user_id/delete',DeleteUser);
Router.post('/techs/add',Addtech)
Router.delete('/techs/:tech_id/delete',Deletetech)
Router.put('/techs/:tech_id/update',Updatetech)

module.exports = Router ;
