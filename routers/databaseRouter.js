const mongoose = require("mongoose")
const express = require('express')
const router = express.Router()
const UserDataModel = require('../schemas/userData')

mongoose.connect('mongodb://localhost/board')


router.get('/showAll', async (req,res)=>{
    console.log('reaching router for db')
    const userData = await UserDataModel.find({})
    console.log(users)

})


router.post('/recieveData',(req,res)=>{
    console.log('DB ROUTER recieved \n',req.body )
    saveToDbs(req.body)

})


router.get('/getData',async (req,res)=>{
    console.log('data request')
    const userData = (await UserDataModel.find({}).lean());
    let lastEntry = userData[userData.length-1]
    console.log(lastEntry);
    res.json(lastEntry);
})


async function saveToDbs(dataJson){
    console.log('SAVING TO DATABASE')
    const userData = new UserDataModel({
        meetings : new Map(Object.entries(dataJson.meetings)),
        work: new Map(Object.entries(dataJson.work)),
        home: new Map(Object.entries(dataJson.home)),
        personal: new Map(Object.entries(dataJson.personal)),
        dump : new Map(Object.entries(dataJson.dump)),
        userId : 'APLHA',
        createdAt : new Date(),
        updatedAt : new Date()
    })
    await userData.save();
}
module.exports = router;