// spec.js
var SearchPage = function() { 
  this.departureDropDown = element(by.css("[name=departing]"));
  this.departureDropDown = element(by.css("[name=destination]"));
  // this.viewOnGitHubButton = this.centerStageButtons.all(by.css(".btn.btn-large")).get(0);
  // this.downloadButton = this.centerStageButtons.element(by.css(".btn-primary"));
  // this.designDocsButton = this.centerStageButtons.element(by.css(".btn-warning"));
};

describe('Given I load the new prepack UI', function() {
  var searchPage = new SearchPage();

  // beforeEach(function() {
    
  // });

  it('should have a title', function() {
    browser.get('https://amatravel.test-wip.tstllc.net/prepack#/landing');
    expect(browser.getTitle()).toEqual('Prepack');
  });

  it('should have a departure drop down', function(){
    expect(searchPage.departureDropDown.isDisplayed()).toBe(true);
  });

  it('then I input Nassau in the Destination', function(){
    searchPage.departureDropDown.sendKeys('Nassau');
  });

  it('then I input Nassau in the Destination', function(){
    expect(searchPage.departureDropDown.getText()).toEqual('Nassau');
  });
       
});