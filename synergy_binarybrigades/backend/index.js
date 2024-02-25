const con=require('./config');
const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//get station from lat and long
app.get('/getstation', (req, resp) => {
    const lattitude = req.body.lattitude;
    const longitude = req.body.longitude;
    con.query('SELECT * FROM station1 Where lattitude= ? AND longitude=?',[lattitude,longitude], (err, result) => {
        if (err) {
            console.warn(error);
        }
        else {
            resp.send(result);
        }
    })
});



//get for number of inputs
app.get('/getfinal/:key', (req, resp) => {
    const num=parseInt(req.params.key);
    console.log(num);
    con.query('SELECT * FROM station1 LIMIT ?',[num], (err, result) => {
        if (err) {
            console.warn(error);
        }
        else {
            resp.send(result);
        }
    })
});

//get from state and city
app.get('/getcity', (req, resp) => {
    const state = req.body.state;
    const city = req.body.city;
    console.log(state);
    con.query('SELECT * FROM station Where state= ? AND city=?',[state,city], (err, result) => {
        if (err) {
            console.warn(error);
        }
        else {
            resp.send(result);
        }
    })
});

app.get('/users',(req,resp)=>{
    con.query('Select image1 From users where id=2',(err,result)=>{
        if(err){
            console.warn(err);
        }
        else{
            resp.send(result);
        }
    })
})

//comments of all stations
app.get('/getcomments',(req,resp)=>{
    con.query('Select username,comment From reviews',(err,result)=>{
        if(err){
            console.warn(err);
        }
        else{
            resp.send(result);
        }
    })
})


//create user
app.post('/signin',(req,resp)=>{
    const email=req.body.email;
    const password=req.body.password;
    con.query('Insert INTO users (email,password) VALUES( ? , ? )',[email,password],(err,result)=>{
        if(err){
            console.warn(err);
        }
        else{
            resp.send(result);
        }
    }) 
})

//
app.listen(8000);

