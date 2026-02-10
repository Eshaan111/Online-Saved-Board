const mongoose = require("mongoose")
const express = require('express')
require('dotenv').config()
const router = express.Router()
const UserDataModel = require('../schemas/userData')
// const userData = require("../schemas/userData")
const Atlas_uri = process.env.ATLAS_URI;


async function connect() {
    try {
        console.log('--- Establishing Handshake ---');
        await mongoose.connect(Atlas_uri, {
            serverSelectionTimeoutMS: 10000, // Fail after 10s
            family: 4,                      // Force IPv4
            heartbeatFrequencyMS: 1000      // Check connection every second
        });
        console.log('✅ ✅ ✅ SUCCESS: CONNECTED TO ATLAS');
    } catch (e) {
        console.error('❌ CONNECTION FAILED:', e.message);
    }
}

console.log('ATLAS LINK = ', Atlas_uri)
connect()



let boilerplate =  
  {
    // _id: ObjectId('69636e96a16c670d49430b03'),
    meetings: {
      meet0: {
        meetTime: '10:00 AM',
        meetText: 'Team Standup',
        // _id: ObjectId('69636e96a16c670d49430b04')
      },
      meet1: {
        meetTime: '2:30 PM',
        meetText: 'Client Call',
        // _id: ObjectId('69636e96a16c670d49430b05')
      },
      meet2: {
        meetTime: '4:00 PM',
        meetText: 'Project Review',
        // _id: ObjectId('69636e96a16c670d49430b06')
      }
    },
    work: {
      card0: {
        cardText: 'Complete project proposal',
        // _id: ObjectId('69636e96a16c670d49430b07')
      },
      card1: {
        cardText: 'Team meeting at 2 PM',
        // _id: ObjectId('69636e96a16c670d49430b08')
      }
    },
    home: {
      card0: {
        cardText: 'Groceries - milk, eggs, bread',
        // _id: ObjectId('69636e96a16c670d49430b09')
      },
      card1: {
        cardText: 'Water the plants',
        // _id: ObjectId('69636e96a16c670d49430b0a')
      }
    },
    personal: {
      card0: {
        cardText: '30 min yoga session',
        // _id: ObjectId('69636e96a16c670d49430b0b')
      },
      card1: {
        cardText: 'Read 2 chapters of book',
        // _id: ObjectId('69636e96a16c670d49430b0c')
      }
    },
    dump: {
      dump0: {
        dumpTime: '10:30 AM',
        dumpText: 'Remember to call mom about the weekend plans',
        // _id: ObjectId('69636e96a16c670d49430b0d')
      },
      dump1: {
        dumpTime: '11:15 AM',
        dumpText: 'Ideas for next presentation: use more visuals, interactive element',
        // _id: ObjectId('69636e96a16c670d49430b0e')
      }
    },  
    userId: 'APLHA',
    // createdAt: ISODate('2026-01-11T09:34:14.965Z'),
    // updatedAt: ISODate('2026-01-11T09:34:14.965Z'),
    __v: 0
  }

router.get('/showAll', async (req,res)=>{
    console.log('reaching router for db')
    const userData = await UserDataModel.find({})
    // console.log(users)

})

router.post('/saveData',async (req,res)=>{
    console.log('DB ROUTER recieved \n',req.body )
    await saveToDbs(req.body)
    res.json({ message: "Data saved" });

})


router.get('/getData',async (req,res)=>{
    console.log('data request')
    const userData = (await UserDataModel.find({}).lean());
    let lastEntry = userData[userData.length-1]
    console.log(lastEntry);
    res.json(lastEntry);
})


router.get('/getByMail',async (req,res)=>{
  
  let userEmail = req.query.userEmail;
  console.log('MAIL ORIENTED REQUEST RECIEVED, MAIL => ', userEmail)  
    
    
    try{
        const userData = (await UserDataModel.find({'userEmail' : userEmail}).lean());
        console.log(userData)
        if(userData.length == 0 ){
            console.log('New Email Request, Sending BOILERPLATE DATA ')
            res.json(boilerplate)
        }
        else{
            res.json(userData[0]);  
        }
        

    }
    catch(e){
        console.log(e.message)
    }

})

async function saveToDbs(dataJson) {
    try {
        console.log('UPSERTING DATA for:', dataJson.userEmail);

        const updateData = {
            meetings: new Map(Object.entries(dataJson.meetings)),
            work: new Map(Object.entries(dataJson.work)),
            home: new Map(Object.entries(dataJson.home)),
            personal: new Map(Object.entries(dataJson.personal)),
            dump: new Map(Object.entries(dataJson.dump)),
            updatedAt: new Date()
        };

        // This replaces your entire "save, catch 11000, delete, retry" logic
        // It updates if it exists, or creates if it doesn't.
        await UserDataModel.findOneAndUpdate(
            { userEmail: dataJson.userEmail }, 
            { $set: updateData, $setOnInsert: { createdAt: new Date() } },
            { upsert: true, new: true, runValidators: true }
        );

        console.log('UPSERT SUCCESSFUL');
    } catch (e) {
        console.error('DATABASE ERROR:', e);
        throw e; // Throw so your Express route knows it failed
    }
}
module.exports = router;