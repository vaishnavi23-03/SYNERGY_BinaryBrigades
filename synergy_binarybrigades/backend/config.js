const mysql=require('mysql');

const con=mysql.createConnection({
    host:'sql6.freesqldatabase.com',
    user:'sql6686443',
    database:'sql6686443',
    password:'PiBZYSn7Ef',
    port:3306
});
con.connect((err)=>{
    if(err){
        console.log("Failed connection");
    }
    else{
        console.log("Success Connection");
    }
});
module.exports=con;