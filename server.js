const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
// const userModel = require('./schemas/user')                                  
const PORT = process.env.PORT || 3000
const app = express();
const databaseRouter = require('./routers/databaseRouter.js')
const sendDataRouter = require('./routers/clientRouter.js')


// app.use(express.static('./public'))
app.use(express.json());
app.use('/sendData', sendDataRouter);
app.use('/db',databaseRouter)

// app.listen(PORT, () => {
//   console.log('Listening on  Port ', PORT)
// })

app.get('/check', (req, res) => {
  res.json({ data: 'HI' });
})

module.exports = app;



// test()