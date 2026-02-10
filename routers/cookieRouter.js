const express = require('express')
const router = express.Router();


router.post('/saveCookie',async (req,res)=>{
    console.log('reaching COOOKIE ROUTEr')
    let data;
    try{
        console.log('cookie router : ',JSON.parse(req.body))
        data = JSON.parse(req.body);
    }
    catch(e){
        console.log('cookie router : ',((req.body)))
        data = (req.body);
    }
    res.cookie('userEmail',JSON.stringify({userEmail : data['userEmail']}),{
            maxAge : 900000,
            httpOnly : true,
            secure : true,
            sameSite : 'lax'
        })
        res.status(200).send(JSON.stringify({message :'PREFERENCE SAVED IN COOKIE'}))
    
})

module.exports = router;

