var express = require('express');
const subscriptioncontroller = require('../controller/subscriptioncontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
    subscriptioncontroller.getAllsubscription((subscription)=>{
    res.send({error:false,data:subscription});

  })
});

router.post('/find',(req,res,next)=>{
  let sid=req.body.sid
  subscriptioncontroller.getBysid(sid,(subscription)=>{
   res.send({error:false,data:subscription});
 
  })
});
router.post('/create',(req,res,next)=>{
    subscriptioncontroller.addNewsubscription(req.body,(subscription)=>{
    if (subscription.affectedRows > 0){
      res.send({error:false,message: "new subscription added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let sid=req.body.sid
  subscriptioncontroller.deleteBysid(sid ,(subscription)=>{
    (subscription.affectedRows > 0) ?
    res.send({error:false,message:"subscription data deleted"})
    :
    res.send({error:false,message:"subscription data not found for  delete"});
  }) 
});
router.post('/update/:sid',(req, res, next) => {
  let sid = req.params.sid; 
  subscriptioncontroller.updatesubscription(sid,req.body,(subscription) => {
{      res.send({ error: false, message: "subscription record updated successfully" })
    }
  })
});
 
module.exports = router;
