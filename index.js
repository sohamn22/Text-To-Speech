const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');


const index = express();
index.engine('ejs', ejsMate)
index.set('view engine', 'ejs');
// index.set('views', path.join(__dirname, 'views'))
index.use(express.static(path.join(__dirname, 'views')));

index.get('/text-speech', (req,res) => {
res.render('template');
});


index.listen(5000, ()=>{
    console.log('Connected');
});