let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

let captainSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[2,"firstname should be atleast 2 character"]
        },
        lastname:{
            type:String,
            minlength:[2,"lastname should be atleast 2 character"]
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        // match:""
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active',"inactive"],
        default:"inactive"
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[2,"color should be atleast 2 character"]
        },
        plate:{
            type:String,
            required:true,
            minlength:[4,"plate should be atleast 4 character"]
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,"capacity should be atleast 1 "]
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['motorcycle','car','auto']
        },  
    },
    location:{
        lat:{
            type:String
        },
        lng:{
            type:String
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    let token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token
}

captainSchema.methods.comparePassword = async function(enteredPassword) {  
    return await bcrypt.compare(enteredPassword, this.password)
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

module.exports = mongoose.model('captain', captainSchema)