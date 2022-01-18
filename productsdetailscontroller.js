const connection=require('./connection');


module.exports ={

    getAllproducts:(callback) => {
     connection.query(`SELECT * FROM productsdetails`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getBypid:(pid,callback) => {
        connection.query(`SELECT pid,name,mobileno,producttype,productname FROM productsdetails WHERE pid=${pid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewproducts:(data,callback) => {
        connection.query(`INSERT INTO productsdetails(pid,name,mobileno,producttype,productname) VALUES ('${data.pid}','${data.name}','${data.mobileno}','${data.producttype}','${data.productname}')`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteBypid:(pid,callback) => {
        connection.query(`DELETE FROM productsdetils WHERE pid=${pid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateproducts:(pid,data,callback) => {
        connection.query(`UPDATE productsdetails SET pid='${data.pid}',name='${data.name}',mobileno='${data.mobileno}',producttype='${data.producttype}',productname='${data.productname}' WHERE pid='${pid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}