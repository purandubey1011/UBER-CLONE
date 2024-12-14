let userModel = require('../models/user.model')

module.exports.createUser = async({firstname, lastname, email, password})=>{
    if(!firstname || !lastname || !email || !password){
        throw new Error('All fields are required')
    }

    let user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user
}