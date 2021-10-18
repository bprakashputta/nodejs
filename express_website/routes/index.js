const { Router } = require('express');
const express = require('express');
const speakerRouter = require('./speakers');
const feedbackRouter = require('./feedback');

const router = express.Router();

// exports the route module 
module.exports = params =>{
    // get method to the 
    router.get('/', (request, response)=>{
        if(!request.session.visitcount){
            request.session.visitcount = 0;
        }

        request.session.visitcount += 1;
        console.log(`Number of visits: ${request.session.visitcount}`);

        response.render('pages/index', {pageTitle: "Bhanu"});
    });

    router.use('/speakers', speakerRouter(params));
    router.use('/feedback', feedbackRouter(params));
    return router;
};
