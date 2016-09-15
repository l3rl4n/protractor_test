exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'firefox'
    },

    specs: [
        'features/*.feature'
    ],

    baseURL: 'http://localhost:8080/',

    cucumberOpts: {
        require: 'features/step_definitions/prepack_steps.js',
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true

    }
};