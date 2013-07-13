/*jslint bitwise: false, browser: true, windows: false, evil: false, white: false, plusplus: true, vars: true, evil:true, regexp:true */
/*global exports:false*/
/*
 * GET home page.
 */

exports.index = function (req, res) {
    "use strict";
    res.render('email', {
        title: 'Send test email',
        layout: 'layout.ejs',
        pagetitle: 'Send a test email'
    });
};