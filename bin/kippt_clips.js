/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
    var nodeKippt = require('node-kippt');
    var Config = require('../bin/app_config');

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
            this.authenticateWithService(this.username, this.apiToken, this.getClips);
        },
        authenticateWithService: function(username, apiToken, callback){

            this.KipptApi = new nodeKippt.KipptAPI({
              username: username,
              api_token: apiToken
            });

            callback(this.KipptApi);
        },
        getSinceDate: function(days) {
            return new Date().setDate(now.getDate()-(days));
        },
        getClips: function(api) {
            
            api.clips.all({
                since: date
                }, function(error, data) {
                  if(!error) {
                    this.Clips = data;

                   }
                });
        }
    }


