const connection=require('./connection');


module.exports ={

    getAllproduct:(callback) => {
     connection.query(`SELECT * FROM addproduct`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getByaid:(aid,callback) => {
        connection.query(`SELECT aid,pname,quantity,cost FROM addproduct WHERE aid=${aid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewproduct:(data,callback) => {
        connection.query(`INSERT INTO addproduct(aid,pname,quantity,cost) VALUES ('${data.aid}','${data.pname}','${data.quantity}','${data.cost}')`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteByaid:(aid,callback) => {
        connection.query(`DELETE FROM addproduct WHERE aid=${aid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateproduct:(aid,data,callback) => {
        connection.query(`UPDATE addproduct SET aid='${data.aid}',pname='${data.pname}',quantity='${data.quantity}',cost='${data.cost}' WHERE aid='${aid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}