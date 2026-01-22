const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
// const PORT = process.env.PORT || 3000
const app = express();
const databaseRouter = require(path.join(__dirname,'../routers/databaseRouter.js'))
const sendDataRouter = require(path.join(__dirname,'../routers/clientRouter.js'))


app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());
app.use('/sendData', sendDataRouter);
app.use('/db',databaseRouter)

// app.listen(PORT, () => {
//   console.log('Listening on  Port ', PORT)
// })

app.get('/check', (req, res) => {
  res.json({ data: 'HI' });
})

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Vercel!' });
});

module.exports = app;




// test()