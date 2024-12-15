let express = require('express')
let router = express.Router()
let {body} = require('express-validator')
let captainController = require('../controllers/captain.controller')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email.'),
    body('fullname.firstname').isLength({min:3}).withMessage('First must be at least 3 characters long.'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long.'),
    body('vehicle.color').isLength({min:2}).withMessage('color must be at least 2 characters long.'),
    body('vehicle.plate').isLength({min:4}).withMessage('plate must be at least 4 characters long.'),
    body('vehicle.capacity').isLength({min:1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['motorcycle','car','auto']).withMessage('Invalid vehical type')
],captainController.registerCaptain)

module.exports = router