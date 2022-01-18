var express = require('express');
const addproductcontroller = require('../controller/addproductcontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  addproductcontroller.getAllproduct((product)=>{
    res.send({error:false,data:product});

  })
});

router.get('/find',(req,res,next)=>{
  let aid=req.body.aid
  addproductcontroller.getByaid(aid,(product)=>{
   res.send({error:false,data:product});
 
  })
});
router.post('/create',(req,res,next)=>{
  addproductcontroller.addNewproduct(req.body,(product)=>{
    if (product.affectedRows > 0){
      res.send({error:false,message: "new product added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let aid=req.body.aid
  addproductcontroller.deleteByaid(aid ,(product)=>{
    (product.affectedRows > 0) ?
    res.send({error:false,message:"product data deleted"})
    :
    res.send({error:false,message:"product data not found for  delete"});
  }) 
});
router.post('/update/:product',(req, res, next) => {
  let aid = req.params.aid;
  addproductcontroller.updateproduct(aid,req.body,(product) => {
{      res.send({ error: false, message: "product record updated successfully" })
    }
  })
});
 
module.exports = router;
