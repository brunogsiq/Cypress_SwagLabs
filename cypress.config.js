const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1600,
    viewportHeight: 1000,
    video: true,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: 'cypress/report',
        overwrite: false,
        html: true,
        json: true,
        timestamp: 'dd-mm-yyyy_hh-mm-ss'
    },
    env: {
        baseUrl: "https://www.saucedemo.com/v1/",
    },
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        specPattern: [
        "cypress/e2e/gui/01 - Tela de Login.cy.js",
        "cypress/e2e/gui/02 - Tela de Login.cy.js",
        "cypress/e2e/gui/03 - Tela de Produtos.cy.js",
        "cypress/e2e/gui/04 - Tela de Produtos.cy.js"
        ],
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
    },
});

