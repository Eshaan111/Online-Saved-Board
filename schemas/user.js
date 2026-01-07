const mongoose = require('mongoose');
const cardSchema = require('./card.js')
const dumpSchema = require('./dump.js')


const userSchema = mongoose.Schema({
    meeting : [dumpSchema],
    work: [cardSchema],
    home: [cardSchema],
    personal: [cardSchema],
    dump : [dumpSchema]    
})

module.exports = mongoose.model('User',userSchema)
