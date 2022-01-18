var express = require('express');
const expensescontroller = require('../controller/expensescontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  expensescontroller.getAllexpenses((expenses)=>{
    res.send({error:false,data:expenses});

  })
});

router.post('/find',(req,res,next)=>{
  let expenseshead=req.body.expenseshead
  expensescontroller.getBygexpenseshead(expenseshead,(expenses)=>{
   res.send({error:false,data:expenses});
 
  })
});
router.post('/create',(req,res,next)=>{
  expensescontroller.addNewexpenses(req.body,(expenses)=>{
    if (expenses.affectedRows > 0){
      res.send({error:false,message: "new expenses added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let paidto=req.body.paidto
  expensescontroller.deleteBypaidto(paidto ,(expenses)=>{
    (expenses.affectedRows > 0) ?
    res.send({error:false,message:"expenses data deleted"})
    :
    res.send({error:false,message:"expenses data not found for  delete"});
  }) 
});
router.post('/update/:expenseshead',(req, res, next) => {
  let expenseshead = req.params.expenseshead; 
  expensescontroller.updateexpenses(expenseshead,req.body,(expenses) => {
{      res.send({ error: false, message: "expenses record updated successfully" })
    }
  })
});
 
module.exports = router;
