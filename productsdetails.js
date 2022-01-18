var express = require('express');
const productsdetailscontroller = require('../controller/productsdetailscontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  productsdetailscontroller.getAllproducts((products)=>{
    res.send({error:false,data:products});

  })
});

router.post('/find',(req,res,next)=>{
  let pid=req.body.pid
  productsdetailscontroller.getBypid(pid,(products)=>{
   res.send({error:false,data:products});
 
  })
});
router.post('/create',(req,res,next)=>{
    productsdetailscontroller.addNewproducts(req.body,(products)=>{
    if (products.affectedRows > 0){
      res.send({error:false,message: "new products added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let pid=req.body.pid
  productsdetailscontroller.deleteBypid(pid ,(products)=>{
    (products.affectedRows > 0) ?
    res.send({error:false,message:"products data deleted"})
    :
    res.send({error:false,message:"products data not found for  delete"});
  }) 
});
router.post('/update/:inquirytype',(req, res, next) => {
  let pid = req.params.pid; 
  productsdetailscontroller.updateproducts(pid,req.body,(products) => {
{      res.send({ error: false, message: "products record updated successfully" })
    }
  })
});
 
module.exports = router;
