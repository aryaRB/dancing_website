const express = require("express");
// const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;


//express stuffs
app.use('/static',express.static('static'));
app.use(express.urlencoded())
//pug files //template engine code  //path.join[...paths] is a node.js command
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))  

//Endpoints
app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('app.pug', params);
})
app.get('/contact.pug', (req, res)=>{
    
    const params = {}
    res.status(200).render('contact.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
