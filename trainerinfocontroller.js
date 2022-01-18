const connection=require('./connection');


module.exports ={

    getAlltrainer:(callback) => {
     connection.query(`SELECT * FROM trainerinfo`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getBytid:(tid,callback) => {
        connection.query(`SELECT tid,name,gender,gmail,idproof,proofno,address,experience,salary FROM trainerinfo WHERE tid=${tid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewtrainer:(data,callback) => {
        connection.query(`INSERT INTO trainerinfo(tid,name,gender,gmail,idproof,proofno,address,experience,salary) VALUES ('${data.tid}','${data.name}','${data.gender}','${data.email}','${data.idproof}','${data.proofno}','${data.address}','${data.experience}','${data.salary}')`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteBytid:(tid,callback) => {
        connection.query(`DELETE FROM trainerinfo WHERE tid=${tid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updatetrainer:(tid,data,callback) => {
        connection.query(`UPDATE trainerinfo SET tid='${data.tid}',name='${data.name}',gender='${data.gender}',email='${data.gmail}',idproof='${data.idproof}',proofno='${data.proofno}',address='${data.address}',experience=',${data.experience}',salary=${data.salary}' WHERE tid='${tid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}