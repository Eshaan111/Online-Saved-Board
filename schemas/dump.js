const mongoose = require('mongoose');

const dumpSchema = mongoose.Schema({
    time : String,
    title : String
})

module.exports = dumpSchema