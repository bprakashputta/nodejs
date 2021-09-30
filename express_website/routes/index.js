const { Router } = require('express');
const express = require('express');
const speakerRouter = require('./speakers');
const feedbackRouter = require('./feedback');

const router = express.Router();

// exports the route module 
module.exports = ()=>{
    // get method to the 
    router.get('/', (request, response)=>{
        response.render('pages/index', {pageTitle: "Bhanu"});
    });

    router.use('/speakers', speakerRouter());
    router.use('/feedback', feedbackRouter());
    return router;
};
