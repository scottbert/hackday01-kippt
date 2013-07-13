/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
(function () {
    "use strict";
    var kippt = require('node-kippt'),
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
		
		var clips =  new Kippt.KipptClips().getClips();
        
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
