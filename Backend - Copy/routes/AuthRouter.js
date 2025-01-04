
const { signup, login } = require('../Controller/AuthController');
const { signupvalidation,loginvalidation,}=require('../Middleware/Authvalidation')
const router=require('express').Router();

router.post('/login',loginvalidation,login)
router.post('/signup',signupvalidation,signup)
 
    // Logic to add song goes here

module.exports=router;


