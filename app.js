/*jslint bitwise: false, browser: true, es5: true, windows: false, evil: false, nomen: true, white: false, plusplus: true, vars: true, evil:true, regexp:true */
/*global require:false, process:false, console:false, __dirname:false*/
(function () {
    "use strict";
    var kippt = require('node-kippt'),
        express = require('express'),
        path = require('path'),
        http = require('http'),
        expressLayouts = require('express-ejs-layouts'),
        //app = express(),

        // Global Application settings
        AppConfig = require('./bin/app_config'),

        // Kippt Clips
        Kippt = require('./bin/kippt_clips'),

        startup = require('./bin/startup'),

        // ROUTES OBJECTS
        sendemail = require('./routes/sendemail');

    // A collection of Clips from Kippt
    //var Clips = Kippt.KipptClips.init();

    app.configure(function () {
        app.set('views', __dirname + '/views');
        app.set('port', AppConfig.ExpressPort);
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
    startup.start(process.argv);
    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });
}());
