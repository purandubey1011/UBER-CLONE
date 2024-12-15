let captainModel = require("../models/captain.model")
let captainService = require("../services/captain.service")
let {validationResult} = require('express-validator')

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