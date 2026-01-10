const mongoose = require("mongoose")
const express = require('express')
const router = express.Router()
const UserModel = require('../schemas/user')

mongoose.connect('mongodb://localhost/board')


router.get('/showAll', async (req,res)=>{
    console.log('reaching router for db')
    const users = await UserModel.find({})
    console.log(users)

})


router.post('/recieveData',(req,res)=>{
    console.log('DB ROUTER recieved \n',req.body )
    
})

router.get('/saveBoard',async (req,res)=>{

})

module.exports = router;