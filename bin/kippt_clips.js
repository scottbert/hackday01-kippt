/*jslint bitwise: false, browser: true, es5: true, windows: false, evil: false, nomen: true, white: true, plusplus: true, vars: true, evil:true, regexp:true */
/*global require:false, process:false, console:false, __dirname:false*/
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
    }


