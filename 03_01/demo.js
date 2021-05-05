var fs =require('fs');
var data = require('./data.json')

console.log(data)

fs.readFile('./data.json', 'utf-8',(err,data)=>{
    console.log(data);
})