const express = require('express');
const path = require('path');
const speakers = express.Router();

module.exports = params => {

    const {speakerService} = params;

    speakers.get('/', async (request, response)=>{
        // Send File To browser using static method
        // We have not created middleware for speakers yet, so 
        // response.sendFile(path.join(__dirname, '../static/speakers.html'));

        const speakers = await speakerService.getList();
        return response.json(speakers);
        // return response.send('Speakers List');
    });

    speakers.get('/:shortname', (request, response)=>{
        return response.send(`Detail page of ${request.params.shortname}`);
    });

    return speakers;
};
