/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
/*
 * GET home page.
 */

exports.index = function (req, res) {
    "use strict";
    var mailer = require('./mailer'),
        fs = require('fs'),
        str = fs.readFileSync('./views/email.ejs', 'utf8');
    mailer.sendEmail(str, function() {
        res.render('emailconfirm', {
            title: 'Send test email',
            layout: 'layout.ejs',
            pagetitle: 'Send a test email'
        });
    });
};