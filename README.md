# RIT SWEN-559 GitHub Continuous Integration Lab

## Pre-Lab

Review the [notes from our lab](https://docs.google.com/presentation/d/1Uo52RZa-w3rvVPO4GVQK2MzgNEhg-A6bl8Id2Hy-jwU/edit?usp=sharing) to guide you.

## Lab Part 1

**Step 1:** Fork repo at https://github.com/scioffi/SWEN-559-Test. You do not need to clone the repo or download anything. The entire lab can be completed using the GitHub web interface.

**Step 2:** Set Up Travis. Create a new file in the root directory named `.travis.yml`.

Add the following to your `.travis.yml`:

```yml
language: node_js
install:
  - npm install -g codecov
script:
  - istanbul cover ./node_modules/mocha/bin/_mocha --reporter lcovonly -- -R spec
  - codecov
```

**Step 3:** Set up codecov. Codecov is a serive that provides coverage reports for your test suite. We will be using Jest as part of the suite so add both of those dependencies to `package.json`.

In `package.json` supply either `lcov.info` or `coverage-final.json` to `codecov`:

```javascript
{
  "scripts": {
    "report-coverage": "codecov",
    ...
  },
  "jest": {
    "coverageDirectory": "./coverage/",
    "collectCoverage": true
  }
  ...
}
```

Jest will now generate coverage files into `coverage/`

Run your tests with a command like this:

```sh
jest && codecov
```

**Step 4:** Set up Eslint. Eslint is a Javascript service that is used to ensure "clean-looking code"; it also ensures that the best practices are in play so the project can be consistent and worry-free.

**Step 5:** Configure Codecov file. Create new file called `codecov.yml`. Write and save the following to that file:

```yml
codecov:
  notify:
    require_ci_to_pass: yes

coverage:
  precision: 2
  round: down
  range: "95...100"

  status:
    project: yes
    patch: yes
    changes: no

parsers:
  gcov:
    branch_detection:
      conditional: yes
      loop: yes
      method: no
      macro: no

comment:
  layout: "header, diff"
  behavior: default
  require_changes: no
```

## Lab Part 2

**Step 1:** Create a new branch called `team-x` where x is your group number.

**Step 2:** Commit new changes to the team branch and push to your forked repo remote branch.

**Step 3:** Navigate to https://github.com/scioffi/SWEN-559-Test/pulls and click `New Pull Request`

**Step 4:** Once you open the PR, you should see your TravisCI build kicking off which checks for several things.
One of those checks will fail (linting error). Utilize your resources to fix the error and update your pull request on GitHub with a fix to the branch.

**Step 5:** Edit `.travis.yml` to include `npm run test`. Save and commit this file to the same branch. The pull request should update.
Committing to the branch with the open PR will kick the checks off again and now this time it will run unit tests.

**Step 6:** You see one of the checks fails due to poor testing. Click on the "details" link in the corner of the TravisCI widget on the GitHub pull request. This will pull up the build failure and explain what exactly went wrong. Fix the bug in the tests and re-commit the code.