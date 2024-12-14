let mongoose = require('mongoose')

// connect to db 
function connectToDb() {
    mongoose.connect(process.env.CONNECTDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('connected to db')
    })
    .catch((err)=> {
        console.log(err)
    })
}

module.exports = connectToDb