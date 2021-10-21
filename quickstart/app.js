const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

logger.on("MessageLogged", args => {
    console.log(args);
    console.log("Event Listened");
});

logger.log("Hi Bhanu!");