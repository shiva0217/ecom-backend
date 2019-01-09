const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('welcome to ECommerce web application');
})
module.exports = router;
