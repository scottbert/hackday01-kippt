    var nodeKippt = require('node-kippt');
    var Config = require('../bin/app_config');

    console.log(Config);

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
                    console.log(error);
                  if(!error) {
                    this.Clips = data;

                    console.log(this.Clips);
                   }
                });
        }
    }


