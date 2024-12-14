let env = require('dotenv')
env.config()
let express = require('express')
let cors = require('cors')
let app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello world')
})

module.exports = app 