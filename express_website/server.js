const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const routes = require('./routes');
const app = express();
const port = 3000;

// set proxy 
app.set('trust proxy', 1);
app.use(
    cookieSession({
        name: 'session',
        keys: ["g3wef3r2r3ef3521", "3f3w3t4y56e3rfsy56"],
    })
);

const SpeakerService = require('./services/SpeakerService');
const speakerService = new SpeakerService('./data/speakers.json');
const FeedbackService = require('./services/FeedbackService');
const feedbackService = new FeedbackService('./data/feedback.json');


// EJS is a template engine to
// to break files into parts to 
// make development easy
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

console.log("HEllo");

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes({
    speakerService,
    feedbackService,
}));

app.listen(port, ()=>{
    console.log("Express Server is listening on ", port);
});