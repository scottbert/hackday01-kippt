/*jslint bitwise: false, browser: true, windows: false, evil: false, white: false, plusplus: true, vars: true, evil:true, regexp:true */
/*global exports:false*/
/*
 * GET home page.
 */

exports.index = function (req, res) {
    "use strict";
    var nodemailer = require('nodemailer'),
        smtpTransport = nodemailer.createTransport("mandrill", {
            auth: {
                user: "martin.shaw@akqa.com",
                pass: "PRgF89ZeBH2oJyCBmpNkKQ"
            }
        }),
        mailOptions = {
            from: "Fred Foo ✔ <sickpuppy@gmail.com>", // sender address
            to: "sickpuppy@gmail.com, akqahackday@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            html: "Hello mum"
        };
    smtpTransport.sendMail(mailOptions, function (error, response) {
        res.render('email', {
            title: 'Send test email',
            layout: 'layout.ejs',
            pagetitle: 'Send a test email'
        });
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
};