const express = require('express');
const hbs=require('hbs');

const port =process.env.port||3000;
var app = express();


app.get('/',(req,res)=>{
    res.send('<title> Birthday_Wish </title> <h1>Hi</h1><br> <p> happy birthday </p>');
});
//http://localhost:3000/


app.set('view engine',hbs)
app.use(express.static(__dirname+'/public'));

//http://localhost:3000/help.html

app.get('/birthday',(req,res)=>{
    res.render('birthday.hbs',{
        currentYear:new Date().getFullYear()
    });
})

app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
}); 