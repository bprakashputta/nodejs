const express = require('express');
const path = require('path');
const feedback = express.Router();



module.exports = params =>{
    const {feedbackService} = params;
    feedback.get('/', async (request, response)=>{
        // response.sendFile(path.join(__dirname, '../static/feedback.html'));
        const feedback = await feedbackService.getList();
        return response.json(feedback);
    });

    feedback.get('/:shortname', (request, response)=>{
        return response.send(`Detail page of ${request.params.shortname}`);
    });

    feedback.post('/', (request, response)=>{
        return response.send('Feedback submitted');
    })
    return feedback;
};