// creating class for events
const EventEmitter = require("events");

// creating object for the event
const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("your name is Faryal");
});
event.emit("sayMyName");
