const connection=require('./connection');


module.exports ={

    getAllmember:(callback) => {
     connection.query(`SELECT * FROM member`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getBymid:(mid,callback) => {
        connection.query(`SELECT mid,firstname,lastname,gender,email,password,address FROM member WHERE mid=${mid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewmember:(data,callback) => {
        connection.query(`INSERT INTO member( mid,firstname,lastname,gender,email,password,address) VALUES ('${data.mid}','${data.firstname}','${data.lastname}','${data.gender}','${data.email}','${data.password}','${data.address}')`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteBymid:(mid,callback) => {
        connection.query(`DELETE FROM member WHERE mid=${mid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updatemember:(mid,data,callback) => {
        connection.query(`UPDATE member SET mid='${data.mid}',firstname='${data.fristname}',lastname='${data.lastname}',gender='${data.gender}',email='${data.email}',password='${data.password}',address='${data.address}' WHERE mid='${mid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}