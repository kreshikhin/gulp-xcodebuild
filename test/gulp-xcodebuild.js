
var should = require('should');
var xcodebuild = require('../gulp-xcodebuild.js');

describe("gulp-xcodebuild", function(){
      it("should build correctly without arguments", function(){
            var result = xcodebuild();
            should(result).equal('xcodebuild');
      });

      it("should build correctly with options", function(){
            var result = xcodebuild({
                  project: "Example.xcodeproj"
            });

            should(result).equal('xcodebuild -project Example.xcodeproj');
      });

      it("should build correctly with options and an action", function(){
            var result = xcodebuild({
                  project: "Example.xcodeproj"
            }, 'test');

            should(result).equal('xcodebuild -project Example.xcodeproj test');
      });

      it("should build correctly with options and actions", function(){
            var result = xcodebuild({
                  project: "Example.xcodeproj"
            }, ['test', 'build']);

            should(result).equal('xcodebuild -project Example.xcodeproj test build');
      });
});
