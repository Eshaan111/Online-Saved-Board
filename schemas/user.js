const mongoose = require('mongoose');
const cardSchema = require('./card.js')
const dumpSchema = require('./dump.js')
const meetSchema = require('./meet.js')


const userSchema = mongoose.Schema({
    
    meetings : {type: Map, of: meetSchema },
    work: {type: Map, of: cardSchema },
    home: {type: Map, of: cardSchema },
    personal: {type: Map, of: cardSchema },
    dump : {type: Map, of: dumpSchema },
    userId : String,
    createdAt : Date,
    updatedAt : Date
})

module.exports = mongoose.model('User',userSchema)
