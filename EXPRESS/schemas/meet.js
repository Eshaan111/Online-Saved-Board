const mongoose = require('mongoose');

const meetSchema = mongoose.Schema({
    meetTime : String,
    meetText : String
})

module.exports = meetSchema;