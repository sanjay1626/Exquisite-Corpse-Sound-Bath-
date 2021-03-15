const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middleware receive info. from frontend in json format
app.use(express.json())

mongoose.connect('mongodb+srv://sanjay1626:Stormer1626$@cluster0.bylwq.mongodb.net/exquisite-corpse-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    
})



app.listen(3001, ()=>{
    console.log("Server is Running 3001..")
})