
# Gulp Xcodebuild

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][travis-image]][travis-url]

The package joins arguments of xcodebuild and returns a string prepared to executing in shell.

```shell
$ npm install gulp-xcodebuild
```

# Using

```js

var gulp = require('gulp');
var shell = require('gulp-shell');
var xcodebuild = require('gulp-xcodebuild');

gulp.task('build', () => {
    shell([
        xcodebuild({
            workspace: "./Example.xcworkspace",
            sdk: "iphoneos9.3",
            scheme: "Example"
      }, 'build')
    ])
});

gulp.task('default', ['build']);

```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/gulp-xcodebuild.svg
[npm-url]: https://npmjs.org/package/gulp-xcodebuild
[downloads-image]: https://img.shields.io/npm/dm/gulp-xcodebuild.svg
[downloads-url]: https://npmjs.org/package/gulp-xcodebuild
[travis-image]: https://img.shields.io/travis/kreshikhin/gulp-xcodebuild/master.svg
[travis-url]: https://travis-ci.org/kreshikhin/gulp-xcodebuild
