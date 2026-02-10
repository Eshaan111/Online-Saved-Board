const express = require('express')
const router = express.Router();


router.post('/saveCookie',async (req,res)=>{
    console.log('reaching COOOKIE ROUTEr')
    try{
        console.log('cookie router : ',JSON.parse(req.body))
    }
    catch(e){
        console.log('cookie router : ',((req.body)))
    }
    
})

module.exports = router;

