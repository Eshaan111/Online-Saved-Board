const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./schemas/user')                                  
                      

require('dotenv').config()
const PORT = process.env.PORT || 3000
const app = express();
const mongodbRouter = require('./routers/databaseRouter.js')
const sendDataRouter = require('./routers/clientRouter.js')


app.use(express.static('./public'))
app.use(express.json());
app.use('/sendData', sendDataRouter);
app.use('/db',mongodbRouter)

app.listen(PORT, () => {
  console.log('Listening on  Port ', PORT)
})

app.get('/check', (req, res) => {
  res.json({ data: 'HI' });
})





// test()