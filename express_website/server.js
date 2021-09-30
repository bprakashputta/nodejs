const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const port = 3000;

// EJS is a template engine to
// to break files into parts to 
// make development easy
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

console.log("HEllo");

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.listen(port, ()=>{
    console.log("Express Server is listening on ", port);
});