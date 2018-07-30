const express = require('express');
const hbs=require('hbs');
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

app.listen(3000,()=>{
    console.log('server is up on port 3000')
}); 