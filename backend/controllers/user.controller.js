let userModel = require('../models/user.model')
let userService = require('../services/user.service')
let {validationResult} = require('express-validator')
let blackListTokenModel = require('../models/blacklistToken.model')

module.exports.registerUser = async(req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    let {fullname,email,password} = req.body

    let isUserAlreadyExist = await userModel.findOne({email})
    if(isUserAlreadyExist){
        return res.status(400).json({message: 'User already exist'})
    }

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
    console.log('logintoken',token)

    res.cookie('token',token)
    
    res.status(201).json({token,user})
}
module.exports.authUser = async(req,res,next)=>{
    res.status(200).json({user:req.user})
}

module.exports.logout = async(req,res,next)=>{
    res.clearCookie('token')

    let token = req.cookies.token || req.headers.authorization.split(" ")[1]

    await blackListTokenModel.create({token})

    res.status(200).json({message: 'logout successfully'})
}