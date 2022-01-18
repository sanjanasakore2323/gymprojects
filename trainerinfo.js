var express = require('express');
const trainerinfocontroller = require('../controller/trainerinfocontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  trainerinfocontroller.getAlltrainer((trainer)=>{
    res.send({error:false,data:trainer});

  })
});

router.post('/find',(req,res,next)=>{
  let tid=req.body.tid
  trainerinfocontroller.getBytid(tid,(trainer)=>{
   res.send({error:false,data:trainer});
 
  })
});
router.post('/create',(req,res,next)=>{
  trainerinfocontroller.addNewtrainer(req.body,(trainer)=>{
    if (trainer.affectedRows > 0){
      res.send({error:false,message: "new trainer added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let tid=req.body.tid
  trainercontroller.deleteBytid(tid ,(trainer)=>{
    (trainer.affectedRows > 0) ?
    res.send({error:false,message:"trainer data deleted"})
    :
    res.send({error:false,message:"trainer data not found for  delete"});
  }) 
});
router.post('/update/:tid',(req, res, next) => {
  let tid = req.params.tid; 
  trainerinfocontroller.updatetrainer(tid,req.body,(trainer) => {
{      res.send({ error: false, message: "trainer record updated successfully" })
    }
  })
});
 
module.exports = router;
