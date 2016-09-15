exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/spec.js'],
  
  multiCapabilities: [
	  // { 'browserName' : 'chromee' },
	  { 'browserName' : 'firefox' }
  ],

  onPrepare: function() {
  browser.driver.manage().window().setSize(1600, 800);
  },

  jasmineNodeOpts: {
    showColors: true
  }
}