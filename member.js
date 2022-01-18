var express = require('express');
const membercontroller = require('../controller/membercontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  membercontroller.getAllmember((member)=>{
    res.send({error:false,data:member});

  })
});

router.post('/find',(req,res,next)=>{
  let mid=req.body.mid
  membercontroller.getBymid(mid,(member)=>{
   res.send({error:false,data:member});
 
  })
});
router.post('/create',(req,res,next)=>{
  membercontroller.addNewmember(req.body,(member)=>{
    if (member.affectedRows > 0){
      res.send({error:false,message: "new member added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let mid=req.body.mid
  membercontroller.deleteBymid(mid ,(member)=>{
    (member.affectedRows > 0) ?
    res.send({error:false,message:"member data deleted"})
    :
    res.send({error:false,message:"member data not found for  delete"});
  }) 
});
router.post('/update/:lastname',(req, res, next) => {
  let mid = req.params.mid; 
  membercontroller.updatemember(mid,req.body,(member) => {
{      res.send({ error: false, message: "member record updated successfully" })
    }
  })
});
 
module.exports = router;
