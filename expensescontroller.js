const connection=require('./connection');


module.exports ={

    getAllexpenses:(callback) => {
     connection.query(`SELECT * FROM expenses`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getBygexpenseshead:(expenseshead,callback) => {
        connection.query(`SELECT expenseshead,paidto,amount,particulars,modeofpay FROM expenses WHERE expenseshead=${expenseshead}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewexpenses:(data,callback) => {
        connection.query(`INSERT INTO expenses(expenseshead,paidto,amount,particulars,modeofpay) VALUES ('${data.expenseshead}','${data.paidto}','${data.amount}','${data.particulars}','${data.modeofpay}')`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteBypaidto:(paidto,callback) => {
        connection.query(`DELETE FROM expenses WHERE paidto=${paidto}`,(err, result) => {
       if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateexpenses:(expenseshead,data,callback) => {
        connection.query(`UPDATE expenses SET expenseshead='${data.expenseshead}',paidto='${data.paidto}',amount='${data.amount}',particulars='${data.particulars}',modeofpay='${data.modeofpay}' WHERE expenseshead='${expenseshead}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}