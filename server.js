const express = require('express')
const mongoose = require('mongoose')
const user = require('./schemas/user')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const app = express();


mongoose.connect('mongodb://localhost/db')



app.use(express.static('./public'))

app.listen(PORT, () => {
  console.log('Listening on  Port ', PORT)
})

app.get('/check', (req, res) => {
  res.json({ data: 'HI' });
})
