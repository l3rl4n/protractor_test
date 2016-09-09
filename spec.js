// spec.js
var SearchPage = function() { 
  this.departureDropDown = element(by.css("[name=departing]"));
  // this.viewOnGitHubButton = this.centerStageButtons.all(by.css(".btn.btn-large")).get(0);
  // this.downloadButton = this.centerStageButtons.element(by.css(".btn-primary"));
  // this.designDocsButton = this.centerStageButtons.element(by.css(".btn-warning"));
};

describe('Given I load the new prepack UI', function() {

  beforeEach(function() {
    browser.get('https://amatravel.test-wip.tstllc.net/prepack#/landing');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Prepack');
  });


  it('should have a departure drop down', function(){
      var searchPage = new SearchPage();
    expect(searchPage.departureDropDown.isDisplayed()).toBe(true);
  });
       
});