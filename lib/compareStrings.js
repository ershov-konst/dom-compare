(function() {

   "use strict";

   var
      compare = require('./compare'),
      DOMParser = typeof window != 'undefined' ? window.DOMParser : require('xmldom').DOMParser;

   module.exports = function(a, b, options){
      var parser = new DOMParser();
      return compare(parser.parseFromString(a, 'text/xml'), parser.parseFromString(b, 'text/xml'), options);
   }

})();