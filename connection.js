let mysql=require('mysql');
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gym'
})
connection.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('connection sucessfully run');
    }

})
module.exports=connection