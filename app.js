const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')


//middlewares
app.use(express.json())
app.use(cors())

const guestRoute = require('./routes/guestRoute')

//import route
app.use('/api', guestRoute)



var server = "mongodb://localhost:27017/weddingdb";
// connect to db 
mongoose.connect( server,{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', ()=> console.log('error connect to db'))
mongoose.connection.once('open', ()=> console.log('success connect to db'))

app.listen(8000, ()=> console.log('running in port 8000'))
    