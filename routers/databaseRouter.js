const mongoose = require("mongoose")
const express = require('express')
const router = express.Router()
const UserDataModel = require('../schemas/userData')
const userData = require("../schemas/userData")

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


router.get('/getByMail',async (req,res)=>{
    userEmail = req.query.userEmail;
    console.log('MAIL ORIENTED REQUEST RECIEVED, MAIL => ', userEmail)
    
    try{
        const userData = (await UserDataModel.find({'userEmail' : userEmail}).lean());
        console.log(userData)
        res.json(userData[0]);
    }
    catch(e){
        console.log(e.message)
    }

})

async function saveToDbs(dataJson){
    try{
        console.log('SAVING NEWLY RECIEVED DATA TO DATABASE , user email = ', dataJson.userEmail)
        const userData = new UserDataModel({
            meetings : new Map(Object.entries(dataJson.meetings)),
            work: new Map(Object.entries(dataJson.work)),
            home: new Map(Object.entries(dataJson.home)),
            personal: new Map(Object.entries(dataJson.personal)),
            dump : new Map(Object.entries(dataJson.dump)),
            userEmail : dataJson.userEmail,
            createdAt : new Date(),
            updatedAt : new Date()
        })
        await userData.save();

    }
    catch(e){
        console.error('ERORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',e.errorResponse)
        if(e.code == 11000){
            const existingUserData = (await UserDataModel.findOneAndDelete({'userEmail':dataJson.userEmail}))
            console.log('EMAIL EXISTED, DATA DELETING')
            saveToDbs(dataJson)
        }
    }
}
module.exports = router;