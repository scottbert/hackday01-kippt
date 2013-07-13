exports.start = function() {


	// consts
	var SCHEDULED_RUN = {
			dayOfWeek: 6, // saturday
			hour: 13,
			minute: 00
		},
		MANUAL_DELAY = 5,
		DAYS_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	
	// dependencies
	var schedule = require('node-schedule');
	
	// vars
	var isManualMode = (arguments['0'].indexOf('manual') > -1),
		rule = new schedule.RecurrenceRule(),
		nextRun = {};
	
	console.log("Starting up!");
	
	if (isManualMode) {
		console.log("Running Manual Mode");
		
		nextRun = new Date(new Date().getTime() + (MANUAL_DELAY * 1000));
	
		console.log("Next run at " + nextRun.toString());
	} else {
		console.log("Running Schedule Mode");
		
		nextRun = SCHEDULED_RUN;
		
		console.log("Next run at " + DAYS_OF_WEEK[nextRun.dayOfWeek] + ' at ' + nextRun.hour + ':' + nextRun.minute);
	}

	var j = schedule.scheduleJob(nextRun, function(){
		console.log('Scheduled task');
		return true;
	});
};
