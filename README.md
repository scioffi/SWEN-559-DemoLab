# RIT SWEN-559 GitHub Continuous Integration Lab

## Pre-Lab

Review the [notes from our lab](https://docs.google.com/presentation/d/1Uo52RZa-w3rvVPO4GVQK2MzgNEhg-A6bl8Id2Hy-jwU/edit?usp=sharing) to guide you.

## Lab Part 1

**Step 1:** Log in to your team's GitHub account. Fork repo at https://github.com/scioffi/SWEN-559-Test. Clone repo locally to have code on your computer. Make sure the computer you're using has NodeJS, otherwise download the latest from here: https://nodejs.org/en/download/.

**Step 2:** `cd` into the SWEN-559-Test directory you just cloned in a terminal window and locally run `npm install` and then `npm start` to run the app. You will see errors in the code! 

**Step 3:** Navigate back to GitHub in your browser and on the `master` branch perform the following steps:

### Lab Part 1 (Travis CI)

**Step 1:** Navigate to GitHub Marketplace (found in the top navigation bar on GitHub). Search and select "Travis CI".

**Step 2:** Scroll to the bottom pricing/setup and select open source. Click "Install For Free", complete order and continue installation process.

IMPORTANT: On the install screen, select "Only Select Repositories" and pick the SWEN 559 repo you forked. Continue the installation.

**Step 3:** Once redirected to the Travis CI website, sign in and authorize the application with GitHub.

**Step 4:** Once redirected, select your repo and you will see it say "No tests have run".

**Step 5:** Navigate back to the repository on GitHub. Open a new branch locally and the following to the bottom of the file `.travis.yml`:

```yml
script:
  - npm run build
```
Push the changes to the branch and open a pull request against master on your forked repo. This should initiate a Travis CI build and the updates to the build will populate on the PR. View the PR and click `Details` next to the build that is running on the GitHub Travis CI integration widget.

Under "Build Started" click the build that is open on your PR. See the trace of the build script running. The build will fail... leave the PR open and you will update it later.

## Lab Part 2: Code Fix

**Step 1:** Run the application locally on your computer, use `npm start` which will open the app in the browser. You will see the error on the page and in the terminal.

**Step 2:** Fix the syntax error (Hint: it's a JS thing, so if you need help raise your hand)

**Step 3:** Run `npm run build` locally to verify changes are fixed

**Step 4:** Push changes to your branch which already has an open PR. This will update the PR and kick off the Travis CI build again and it should pass this time if your changes are correct.

**Step 5:** Merge your PR! :)

## Lab Part 3: CodeCov

**Step 1:** Navigate to the GitHub Marketplace and search for CodeCov

**Step 2:** Install the integration same as you did for Travis CI and be sure to only add it to the forked repo. Login and authenticate it with your GitHub account.

**Step 3:** Navigate back to the GitHub repo and make the next code change in the browser (or you can do this locally and push to a new branch). Add the following line `npm run test-with-reporting` to the `.travis.yml` file so it should now look like this:

```yml
script:
  - npm run build
  - npm run test-with-reporting
```

Open a new pull request with this change under a new branch (not master). This PR will initiate the Travis CI integration to kick off a new build. Once the build runs, you should also see a CodeCov report on the pull request as well. Take note to the initial code coverage...

**Step 4:** The Travis build should error out on a test (oh no!) It's your job to fix the code so that the test will pass! Make this code change locally and run the tests by `npm test` to see it pass. Once this change is all set, make a commit and push it to your open PR with the pending script changes.

**Step 5:** See the updated Travis build pass and the code coverage should be higher now. Merge your PR and you're all set!

## Lab Bonus!

Try taking the lab a step further and find an integration you want to learn more about or want to teach others on the GitHub Marketplace. Configure this integration into the forked project and be prepared to tell the class about that integration!
