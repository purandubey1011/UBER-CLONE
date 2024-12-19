let captainModel = require("../models/captain.model")
let captainService = require("../services/captain.service")
let {validationResult} = require('express-validator')
let blackListTokenModel = require('../models/blacklistToken.model')

module.exports.registerCaptain = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let { fullname, email, password, vehicle } = req.body
    console.log(req.body)

    let isCaptainAlreadyExist = await captainModel.findOne({email})
    if(isCaptainAlreadyExist){
        return res.status(400).json({message: 'Captain already exist'})
    }

    let hashPassword = await captainModel.hashPassword(password)

    let captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        vehicleType: vehicle.vehicleType,
        capacity: vehicle.capacity,
        plate: vehicle.plate
    })

    let token = captain.generateAuthToken()

    res.status(201).json({ token, captain })
}

module.exports.loginCaptain = async(req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    let {email,password} = req.body

    let captain = await captainModel.findOne({email}).select('+password')

    if(!captain){
        return res.status(401).json({message: 'Invalid email'})
    }

    let isValid = await captain.comparePassword(password,captain.password)

    if(!isValid){
        return res.status(401).json({message: 'Invalid password'})
    }

    let token = captain.generateAuthToken()

    res.cookie('token',token)
    
    res.status(201).json({token,captain})
}

module.exports.getCaptainProfile = async(req,res,next)=>{
    res.status(200).json({captain:req.captain})
}

module.exports.logoutCaptain = async(req,res,next)=>{
    let token = req.cookies.token || req.headers.authorization.split(" ")[1]

    await blackListTokenModel.create({token})

    res.clearCookie('token')

    res.status(200).json({message: 'logout successfully'})
}