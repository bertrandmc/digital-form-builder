exports.config = {
  runner: "local",
  specs: ["./features/**/*.feature"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      //
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless"],
      },
      acceptInsecureCerts: true,
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  baseUrl: "http://localhost:3000",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 5000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  framework: "cucumber",
  reporters: [
    "spec",
    [
      "cucumberjs-json",
      {
        jsonFolder: "./reports/json/",
        language: "en",
      },
    ],
  ],
  cucumberOpts: {
    require: ["./features/step-definitions/steps.js"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    snippets: false,
    source: true,
    profile: [],
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  // =====
  // Hooks
  // =====

  beforeFeature: function () {
    browser.maximizeWindow();
  },
};
