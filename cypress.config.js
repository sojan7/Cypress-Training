const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder: "cypress/downloads",
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  defaultCommandTimeout: 4000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 30000,

  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {},
  },
});
