const express =require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('server calısıyor sanırım xdd');
});

module.exports=router;