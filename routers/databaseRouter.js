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
    saveToDbs(req.body)

})

async function saveToDbs(dataJson){
    console.log('SAVING TO DATABASE')
    const user = new UserModel({
        meetings : new Map(Object.entries(dataJson.meetings)),
        work: new Map(Object.entries(dataJson.work)),
        home: new Map(Object.entries(dataJson.home)),
        personal: new Map(Object.entries(dataJson.personal)),
        dump : new Map(Object.entries(dataJson.dump)),
        userId : 'APLHA',
        createdAt : new Date(),
        updatedAt : new Date()
    })
    await user.save();
}
module.exports = router;