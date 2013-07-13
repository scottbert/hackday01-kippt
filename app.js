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

        startup = require('./bin/startup'),
        kipptInstance = require('./bin/kippt_config'),
        // ROUTES OBJECTS
        sendemail = require('./routes/sendemail');
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
    startup.start(process.argv);
    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });
}());
