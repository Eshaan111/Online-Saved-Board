const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
// const PORT = process.env.PORT || 3000
const app = express();
const databaseRouter = require(path.join(__dirname,'../routers/databaseRouter.js'))
const cookieRouter = require(path.join(__dirname,'../routers/cookieRouter.js'))


app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/db',databaseRouter);
app.use('/cookie',cookieRouter);




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