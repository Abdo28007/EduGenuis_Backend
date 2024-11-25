const User = require('../models/user_model')
const express = require('express');
const Router = express.Router();
const {CreateUser , loginController , UpdaetUserController , GetUserProfile ,GetTechs , Search, GetTechDetail , deleteprofile , askAI , uploadImage ,upload} = require('../controllers/user_controllers')
const {ValidateRegisterForm,validationResult , ValidateLoginForm , ValidateUpdateForm}= require('../middlewares/validation/validator')
const {IsAuth , isAdmin} = require('../middlewares/auth')



Router.post('/registre',ValidateRegisterForm,validationResult,CreateUser);
Router.post('/login',ValidateLoginForm,validationResult,loginController)
Router.get("/users/:user_id/profile" ,IsAuth, GetUserProfile)
Router.put("/users/:user_id/profile/update" , ValidateUpdateForm , validationResult,IsAuth, UpdaetUserController)
Router.delete("/users/:user_id/profile/delete" , IsAuth,deleteprofile)
Router.post("/ask_AI" , IsAuth,askAI)
Router.get("/search", Search)
Router.get(["/techs", "/"], GetTechs);
Router.get(["/techs/:tech_id/details"], GetTechDetail);
Router.put("/users/:user_id/profile/add_image", IsAuth,upload.single('file'), uploadImage);

module.exports = Router ;