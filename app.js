const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const bodyparser = require('body-parser');
const port = 8000;


//define mongoose schema

var contactschema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    contactno: String,
    
    
  });
  const contacts = mongoose.model('contacts', contactschema);


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
app.post('/contact.pug', (req, res)=>{
    
    var myData = new contacts(req.body);
    myData.save().then(()=>{
        res.send("this is saved in database")
    })
    .catch(()=>{
        res.status(404).send("this is not saved in database")
    })
    // res.status(200).render('contact.pug');
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
