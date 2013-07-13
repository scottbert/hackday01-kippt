exports.init = (function() {
var Kippt = require('node-kippt');
  var kippt = new Kippt.KipptAPI({
    username: '',
    api_token: ''
  });

  return kippt;

})();
