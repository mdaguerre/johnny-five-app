var express = require('express');
var five    = require("johnny-five");

var board   = new five.Board();
var app     = express();  

//Define the leds
var blueLed;
var greeLed;
var redLed;
var rgbLed;

//On arduino board ready setup the led pins
board.on("ready", function() {
   blueLed    = new five.Led(10);
   greenLed   = new five.Led(9);
   redLed     = new five.Led(6);
 });

//Run the server in the port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

//Setup the headers to allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Default route
app.get('/', function (req, res, next) {
  res.send('<h1>Hi!</h1>');
});

//Enpoint to turn on or of a led
app.post('/action/:led/:action', function (req, res, next) {
  var led;
  var requiredLed   = req.params.led;
  var action        = req.params.action;

  switch(requiredLed){
    case 'blue'   : led = blueLed;  break;
    case 'green'  : led = greenLed; break;
    case 'red'    : led = redLed;   break;
  }

  switch(action){
  	case 'on' 	: led.on();   break;
  	case 'off' 	: led.off();  break;
  }

  res.sendStatus(200);
});

