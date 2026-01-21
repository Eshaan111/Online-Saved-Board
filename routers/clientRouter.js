const express = require('express')
const router = express.Router();

router.post('/',async (req,res)=> { 
    console.log('Client Router Recieved data')
    try{
        const res = await fetch(`/db/recieveData`,{
            method : 'POST',
            headers: { 'Content-type' : 'application/json'},
            body : JSON.stringify(req.body)
        }).then(console.log('FORWARDING DATA FROM CLIENT ROUTER --> DB ROUTER '));

        if(!res.ok){
            console.error('Request Failed in APP router : ', res.status);
            return
        }
        const reply = (await res).json();
        console.log('Response From server : ', reply);
        return;

    }
    catch(e){
        console.error(e)
    }
})


module.exports = router;