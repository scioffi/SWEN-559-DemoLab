# RIT SWEN-559 GitHub Continuous Integration Lab

## Pre-Lab

Review the [notes from our lab](https://docs.google.com/presentation/d/1Uo52RZa-w3rvVPO4GVQK2MzgNEhg-A6bl8Id2Hy-jwU/edit?usp=sharing) to guide you.

### Travis CI Setup

Add the following to your `.travis.yml`:
```yml
language:
  node_js
install:
  - npm install -g codecov
script:
  - istanbul cover ./node_modules/mocha/bin/_mocha --reporter lcovonly -- -R spec
  - codecov
```
The first script line will change depending on your coverage collecting tool, see below.
### Produce Coverage Reports
### [Mocha](http://mochajs.org/) + [Blanket.js](https://github.com/alex-seville/blanket)
- Install [blanket.js](http://blanketjs.org/)
- Configure blanket according to [docs](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_node.md).
- Run your tests with a command like this:

```sh
NODE_ENV=test YOURPACKAGE_COVERAGE=1 ./node_modules/.bin/mocha \
  --require blanket \
  --reporter mocha-lcov-reporter
codecov
```
### [Mocha](http://mochajs.org/) + [JSCoverage](https://github.com/fishbar/jscoverage)

Instrumenting your app for coverage is probably harder than it needs to be (read [here](http://www.seejohncode.com/2012/03/13/setting-up-mocha-jscoverage/)), but that's also a necessary step.

In mocha, if you've got your code instrumented for coverage, the command for a travis build would look something like this:
```sh
YOURPACKAGE_COVERAGE=1 ./node_modules/.bin/mocha test -R mocha-lcov-reporter
```

### [Istanbul](https://github.com/gotwarlost/istanbul)

**With Mocha:**

```sh
istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && codecov
```

**With Jasmine:**

```sh
istanbul cover ./node_modules/jasmine/bin/jasmine.js
```

***With Karma:***

The `lcov.info` can be used as in other configurations. Some projects experienced better results using `json` output but it is no longer enabled by default. In `karma.config.js` both can be enabled:

```javascript
module.exports = function karmaConfig (config) {
    config.set({
        ...
        reporters: [
            ...
            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            'coverage'
        ],
        // Configure code coverage reporter
        coverageReporter: {
            reporters: [
                // generates ./coverage/lcov.info
                {type:'lcovonly', subdir: '.'},
                // generates ./coverage/coverage-final.json
                {type:'json', subdir: '.'},
            ]
        },
        ...
    });
};
```

In `package.json` supply either `lcov.info` or `coverage-final.json` to `codecov`:

```javascript
{
  "scripts": {
    "report-coverage": "codecov",
    ...
  }
  ...
}
```

### [Jest](https://facebook.github.io/jest/)
Add it in your package.json:
```javascript
"jest": {
  "coverageDirectory": "./coverage/",
  "collectCoverage": true
}
```

Jest will now generate coverage files into `coverage/`

Run your tests with a command like this:
```sh
jest && codecov
```
