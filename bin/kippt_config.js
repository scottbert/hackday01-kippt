exports.init = (function() {

  var kippt = new Kippt.KipptAPI({
    username: '',
    api_token: ''
  });

  return kippt;

})();
