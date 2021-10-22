const Joi = require('joi');
const express = require('express');
const {request, response} = require("express");
const app = express();

// Initial Setup
app.use(express.json());
const port = process.env.PORT || 3000;

const courses = [
    {
        id: 1, 
        name: "course1"
    },
    {
        id: 2,
        name: "course2"
    },
    {
        id: 3,
        name: "course3"
    }
];

// HTTP GET Request
// Route, Callback function
app.get('/', (request, response)=>{
    response.send("HEllo WorlD!");
});

// API Endpoint for getting list of all courses
app.get('/api/courses', (request, response)=>{
    response.send(courses);
});

// API Endpoint for getting a particular course
app.get('/api/courses/:id', (request, response)=>{
    // response.send(request.params.id);
    let course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course){
        // if the course does not exist
        // return 404
        return response.status(404).send(`The course with the given ID ${request.params.id} was not found!`);
    }else{
        response.send(course);
    }
});

// API Endpoint for getting posts of a particular month and year
app.get('/api/posts/:year/:month', (request, response)=>{
    response.send(request.query);
});

//POST API to add new course
app.post('/api/courses', (request, response)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const { error } = validateCourse(request.body);// This is same as calling result.error
    if(error){
        return response.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length+1,
        name: request.body.name
    };
    courses.push(course);
    response.send(courses);
});


app.put('/api/courses/:id', (request, response)=>{
    // Step 1
    // Check if the course exists
    // in the list of courses
    const course = courses.find(
        c => c.id === parseInt(request.params.id)
    );
    if(!course){
        return response.status(400).send("Course was not Found!");
    }

    // Step 2
    // Now Validate the course parameters
    // passed in the request
    const { error } = validateCourse(request.body);// This is same as calling result.error
    if(error){
        response.status(400).send(error.details[0].message);
    }

    // Step 3
    // We will arrive until this step only if
    // the course with given id is present
    course.name = request.body.name
    response.send(courses);
});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

// Delete Request
app.delete('/api/courses/:id', (request, response)=>{
    // Step 1
    // Check if the course with given id exists in courses
    const course = courses.find(
        c => c.id === parseInt(request.params.id)
    );
    if(!course) {
       return response.status(400).send("The course with given Object ID was not found");
    }

    // Step 2
    // Delete the course
    const index = courses.indexOf(course);
    courses.splice(index,1);
    response.send(courses);
});


app.listen(port, ()=>{
    console.log("Listening on port:",port);
});