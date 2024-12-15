let userModel = require('../models/user.model')
let userService = require('../services/user.service')
let {validationResult} = require('express-validator')

module.exports.registerUser = async(req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    let {fullname,email,password} = req.body

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
module.exports.loginUser = async(req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    let {email,password} = req.body

    let user = await userModel.findOne({email}).select('+password')

    if(!user){
        return res.status(401).json({message: 'Invalid email'})
    }

    let isValid = await user.comparePassword(password,user.password)

    if(!isValid){
        return res.status(401).json({message: 'Invalid password'})
    }

    let token = user.generateAuthToken()
    
    res.status(201).json({token,user})
}