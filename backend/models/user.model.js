let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

let userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength:[3, 'firstname must be at least 3 characters long']
        },
        lastname: {
            type: String,
            required: true,
            minlength:[3, 'lastname must be at least 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength:[5, 'email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    sockeId: {
        type: String
    },
})

userSchema.methods.generateAuthToken = function() {
    let token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token
}

userSchema.methods.comparePassword = async function(enteredPassword) {  
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

module.exports = mongoose.model('user', userSchema)

