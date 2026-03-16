const mongoose = require('mongoose');

const dumpSchema = mongoose.Schema({
    dumpTime : String,
    dumpText : String
})

module.exports = dumpSchema;