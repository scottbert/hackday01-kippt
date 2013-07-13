/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
exports.sendEmail = function (html, callback) {
    "use strict";
    var config = require('../bin/app_config').AppConfig,
        nodemailer = require('nodemailer'),
        smtpTransport = nodemailer.createTransport("mandrill", {
            auth: {
                user: config.email.apiUser,
                pass: config.email.apiPass
            }
        }),
        mailOptions = {
            from: config.email.from, // sender address
            to: config.email.to, // list of receivers
            subject: "AKQA hack day test email", // Subject line
            html: html,
            generateTextFromHTML: true
        };
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
        if (typeof callback !== "undefined") {
            callback();
        }
        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
};