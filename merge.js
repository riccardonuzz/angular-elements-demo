var concat = require('concat-files');

concat([
    // './dist/angular-elements-demo/main-es2015.js',
    // './dist/angular-elements-demo/polyfills-es2015.js',
    // './dist/angular-elements-demo/runtime-es2015.js',
    './dist/angular-elements-demo/main-es5.js',
    './dist/angular-elements-demo/polyfills-es5.js',
    './dist/angular-elements-demo/runtime-es5.js',
], './dist/user-poll.js', function (err) {
    if (err) throw err
    console.log('Done');
});