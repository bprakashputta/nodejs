var express = require('express');
var app = express();

app.use(express(__dirname));
var server = app.listen(3000, () => {
    console.log("Server is running on port", server.address().port);
})