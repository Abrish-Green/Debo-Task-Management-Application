const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const API = express.Router()
const port = process.env.PORT
const connectDB = require('./config/mongodb')

const cookieParser = require("cookie-parser");

const user = require('./routes/user')
app.use(express.json());
app.use(cookieParser());
app.use((req,res,next)=>{
  console.log(req.url)
  next()
})
app.use('/user',user)
try{
  connectDB()
}catch(err){
  console.log("reconnecting to server wait...")
  connectDB()
}


app.use('/api/v1', API)

app.listen(port, () => {
  console.log(`Development Port:${port}`)
})