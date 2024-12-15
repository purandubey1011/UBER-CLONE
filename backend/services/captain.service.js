let captionModel = require("../models/captain.model");

module.exports.createCaptain = async ({firstname,lastname,email,password,color,vehicleType,capacity,plate}) => {
    if(!firstname || !lastname || !email || !password || !color || !vehicleType || !capacity || !plate){
        throw new Error('All fields are required')
    }
    let caption =await captionModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return caption
}               