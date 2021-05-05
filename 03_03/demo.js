var fs = require('fs');

var data = {
    name: "Putta Bhanu Prakash",
    email: "bhanu.putta1999@gmail.com",
    mobile: "+91-8978843077"
}

fs.writeFileSync('data.json', JSON.stringify(data));