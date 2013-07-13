(function() {
	console.log("Start of app.js");

    var kippt = require('node-kippt'),
        mandrill = require('node-mandrill')('<Your Api Key Here>'),
        express = require('express'),
        //kipptInstance = require('./bin/kippt_config'),
		startup = require('./bin/startup');
		
		//var app = express();
		
		startup.start(process.argv);
})();
