const express = require('express')
const router = express.Router();

router.post('/',(req,res)=>{
    console.log('Router Recieved ',req.body)
})


module.exports = router;