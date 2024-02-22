require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 4000

//CONNECT TO MONGODB
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pdykdce.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


//MIDDLEWARE

//Enable CORS
app.use(cors())

//Serve static files
app.use(express.static('public'))

//Parse requests
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Set EJS as templating engine
app.set('view engine', 'ejs')

//PROCESS ROUTES
app.listen((req, res) => {
    console.log(`Server is running on http://localhost:${port}`)
})