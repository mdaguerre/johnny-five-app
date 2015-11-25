# johnny-five-app
---

This app is a proof of concept between a nodejs server with express and johnny-five packages to interact with an arduino.

###Built With
	
[nodejs](https://nodejs.org)

[johnny-five](http://johnny-five.io/)

[expressjs](http://expressjs.com/)

[ionic](http://ionicframework.com/)


######First you have to download and install [node](https://nodejs.org) in your machine

#####Install johnny-five
	npm install johnny-five

#####Install express
	npm install express 

#####Install ionic + cordova
	npm install -g cordova ionic


##To run the code
##### First you need to change your local ip address in the code
Go to 
		
	jhonny-app/www/js/controllers.js 
	
	modify the postLedAction function with your local ip address in line 32


##### Run the node server
	node app.js

##### Run the ionic app
	cd johnny-app
	
	ionic serve --address <local ip address>
	
	Example:
	ionic serve --address 192.168.0.100
	
**In this moment the browser should open with the ionic app running**


##Arduino Setup

![Schematics](http://s27.postimg.org/jfi8wdoab/Screen_Shot_2015_11_24_at_10_33_32_PM.png)
