const mongoose =  require('mongoose')

const cardSchema = new mongoose.Schema({
    cardText : String
})

module.exports = cardSchema;