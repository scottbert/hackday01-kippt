/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
exports.AppConfig = {
    Kippt: {
        username: 'akqa',
        api_token: '3076c399fb4c7c337f5b3499ce6c3854658a4cc0',
        frequency: '7'
    },
	Scheduler: {
		dayOfWeek: 6, // saturday
		hour: 15,
		minute: 0
	},
    Express: {
        PORT: 9998
    },
    Email : {
        from: "Fred Foo ✔ <sickpuppy@gmail.com>",
        to: "akqa.hackathon@gmail.com",
        apiPass: "PRgF89ZeBH2oJyCBmpNkKQ",
        apiUser: "martin.shaw@akqa.com"
    }
};