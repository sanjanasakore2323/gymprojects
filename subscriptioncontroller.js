const connection=require('./connection');


module.exports ={

    getAllsubscription:(callback) => {
     connection.query(`SELECT * FROM subscription`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getBysid:(sid,callback) => {
        connection.query(`SELECT sid,subscription,totalamt,entryfees FROM subscription WHERE sid=${sid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewsubscription:(data,callback) => {
        connection.query(`INSERT INTO subscription(sid,subscription,totalamt,entryfees) VALUES ('${data.sid}','${data.subscription}','${data.totalamt}','${data.entryfees}')`,(err, result) => {
           if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteBysid:(sid,callback) => {
        connection.query(`DELETE FROM subscription WHERE sid=${sid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updatesubscription:(sid,data,callback) => {
        connection.query(`UPDATE subscription SET sid='${data.sid}',subscription='${data.subscription}',totalamt='${data.totalamt}',entryfees='${data.entryfees}' WHERE sid='${sid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}