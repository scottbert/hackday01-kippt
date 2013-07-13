/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
(function () {
    "use strict";
    var nodeKippt = require('node-kippt'),
        Config = require('../bin/app_config');

    exports.KipptClips = {
        init: function(username, api_token) {
            this.username = username || 'akqa';
            this.apiToken = api_token || '3076c399fb4c7c337f5b3499ce6c3854658a4cc0';

            // The Api for interacting with Kippt
            // https://npmjs.org/package/node-kippt  
            this.KipptApi = {};

            // The Json Representation of the returned Kippt data
            this.Clips = {};

            //Initialise 
            this.authenticateWithService(this.username, this.apiToken, this.getClips.apply(this));
        },
        authenticateWithService: function(username, apiToken, callback){

            this.KipptApi = new nodeKippt.KipptAPI({
              username: username,
              api_token: apiToken
            });

                console.log('KipptApi');
                console.log(this.KipptApi);

            //Get Clips
            callback(this.KipptApi);
        },
        getSinceDate: function(days) {
            var now = new Date(0);
            return new Date().setDate(now.getDate()-(days));
        },
        getClips: function(api) {
            console.log(this);

            var date = this.getSinceDate(7);
            this.KipptApi.clips.all({
                since: date
                }, function(error, data) {
                  if(!error) {
                    this.Clips = data;

                   }
                });
        }
    };
}());

