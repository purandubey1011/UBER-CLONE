let express = require('express')
let router = express.Router()
let {body} = require('express-validator')
let user = require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email.'),
    body('fullname.firstname').isLength({min:3}).withMessage('First must be at least 3 characters long.'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last must be at least 3 characters long.'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long.')
],user.registerUser)

module.exports = router