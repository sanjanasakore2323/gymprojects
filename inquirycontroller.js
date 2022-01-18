const connection=require('./connection');


module.exports ={

    getAllinquiry:(callback) => {
     connection.query(`SELECT * FROM inquiry`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getBygid:(gid,callback) => {
        connection.query(`SELECT gid,firstname,lastname,inquirytype,gmail,password FROM inquiry WHERE gid=${gid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewinquiry:(data,callback) => {
        connection.query(`INSERT INTO inquiry(gid,firstname,lastname,inquirytype,gmail,password) VALUES ('${data.gid}','${data.firstname}','${data.lastname}','${data.inquirytype}','${data.gmail}','${data.password}')`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteBygid:(gid,callback) => {
        connection.query(`DELETE FROM inquiry WHERE gid=${gid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateinquiry:(gid,data,callback) => {
        connection.query(`UPDATE inquiry SET gid='${data.gid}',firstname='${data.fristname}',lastname='${data.lastname}',inquirytype='${data.inquirytype}',gmail='${data.gmail}',password='${data.password}' WHERE gid='${gid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}