let userModel = require('../models/user.model')
let userService = require('../services/user.service')
let {validationResult} = require('express-validator')

module.exports.registerUser = async(req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    let {fullname,email,password} = req.body
    console.log(req.body)

    let hashPassword = await userModel.hashPassword(password)

    let user =await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashPassword
    })

    let token = user.generateAuthToken()

    res.status(201).json({token,user})
}