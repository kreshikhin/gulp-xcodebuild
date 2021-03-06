

function isString(str) {
      return typeof str === 'string' || str instanceof String;
}

module.exports = function(options, buildactions){
      var tokens = ['xcodebuild'];

      for(var k in options){
            tokens.push('-' + k, options[k]);
      };

      if(isString(buildactions)){
            tokens.push(buildactions);
      }else{
            for(var i in buildactions){
                  tokens.push(buildactions[i]);
            };
      }

      return tokens.join(' ');
}
