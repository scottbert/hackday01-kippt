
/*jslint bitwise: false, browser: true, es5: true, windows: false, evil: false, nomen: true, white: false, plusplus: true, vars: true, evil:true, regexp:true */
/*global require:false, process:false, console:false, __dirname:false*/
(function () {
    "use strict";
    var kippt = require('node-kippt'),
        mandrill = require('node-mandrill')('<Your Api Key Here>'),
        express = require('express'),
        path = require('path'),
        http = require('http'),
        expressLayouts = require('express-ejs-layouts'),
        app = express(),

        // Global Application settings
        AppConfig = require('./bin/app_config'),

        // Kippt Clips
        Kippt = require('./bin/kippt_clips'),

        startup = require('./bin/startup'),

        // ROUTES OBJECTS
        sendemail = require('./routes/sendemail');
        
		configureExpress(app);
		
		var schedulerFired = function(){
			console.log("scheduler fired");
		}
		
		startup.start(process.argv, schedulerFired);
	
	function configureExpress(app)
	{
		console.log("configuring express");
	
		app.configure(function () {
			app.set('views', __dirname + '/views');
			app.set('port', 9998);
			app.set('view engine', 'ejs');
			app.use(expressLayouts);
			app.use(express.static(path.join(__dirname, 'public')));
			app.use(app.router);
		});
		app.configure('development', function () {
			app.use(express.errorHandler());
		});
		// ROUTES
		app.get('/sendemail', sendemail.index);
		app.get('/', sendemail.index);
		
		console.log("configured express");
	}
}());
