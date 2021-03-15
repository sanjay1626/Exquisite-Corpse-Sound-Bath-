const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middleware receive info. from frontend in json format
app.use(express.json())

mongoose.connect('', {
    useNewUrlParser: true,
})



app.listen(3001, ()=>{
    console.log("Server is Running 3001..")
})