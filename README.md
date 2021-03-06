# Unit testing AngularJS code using ng-describe: a tutorial

This repo is the code example for the tutorial, 
available at [1-2-3-tested](http://glebbahmutov.com/blog/1-2-3-tested/).

Initial install

    git clone git@github.com:bahmutov/unit-testing-angularjs-tutorial.git
    cd unit-testing-angularjs-tutorial
    npm install

Available checkpoints

* `step-0` - the initial code without unit tests
* `step-1` - first unit test, karma test runner
* `step-2` - example `beforeEach` callback
* `step-3` - added code coverage
* `step-4` - first Angular code, with unit tests
* `step-5` - simple Angular application with a controller
* `step-6` - testing the controller
* `step-7` - unit testing provided value using [ng-describe][ng-describe]
* `step-8` - unit test controller using `ng-describe`
* `step-9` - verifying scope values after digest cycle
* `step-10` - http get with mock response
* `step-11` - mocking an injected service instead of http

To run the code at each checkpoint, like step-0

    git checkout step-0
    npm install

[ng-describe]: https://github.com/kensho/ng-describe

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/unit-testing-angularjs-tutorial/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
