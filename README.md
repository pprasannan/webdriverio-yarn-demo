# WebdriverIO demo using Yarn

Uses http://webdriver.io to execute selenium web tests. Tests can be run locally using the wdio.conf.js config file, which uses chromedriver to execute browser tests.

### Environment Setup

1. Global Dependencies
  * Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)
  * Install Node.js with [Homebrew](http://brew.sh/)
  ```
  $ brew install node
  ```

2. Project Dependencies

* Install Node modules
```
$ yarn install
```

### Running Tests

* Run tests locally
```
$ yarn test
```

* Run a single test (if you use the same folder structure)
```
$ yarn run test -- --spec tests/folder/filename.js
```

#### Docs & further reading

* http://webdriver.io
* http://webdriver.io/guide/usage/selectors.html
* http://blog.kevinlamping.com/selecting-elements-in-webdriverio
