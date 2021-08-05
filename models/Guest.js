const mongoose = require('mongoose')

let schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    status :  {
        type : String,
        required : true
    },
    note :  {
        type : String,
        // required : true
    },
    date :  {
        type : Date,
        default : Date.now
    },
})

module.exports = mongoose.model('Guest', schema)