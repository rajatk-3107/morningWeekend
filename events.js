const events = require('events')

const eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', () => {
    console.log("Scream event")
})
eventEmitter.emit('scream')