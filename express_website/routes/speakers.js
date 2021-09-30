const express = require('express');
const path = require('path');
const speakers = express.Router();

module.exports = ()=>{
    speakers.get('/', (request, response)=>{
        // Send File To browser using static method
        // We have not created middleware for speakers yet, so 
        response.sendFile(path.join(__dirname, '../static/speakers.html'));
        // return response.send('Speakers List');
    });

    speakers.get('/:shortname', (request, response)=>{
        return response.send(`Detail page of ${request.params.shortname}`);
    });
    return speakers;
};
