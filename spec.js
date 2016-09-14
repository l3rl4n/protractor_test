// spec.js
var SearchPage = function() { 
  this.departureDropDown      = $("[name=departing]");
  this.departureDropDownClear = $("button.ng-scope");
  this.destinationDropDown    = $("[name=destination]");
};

describe('Given I load the new prepack UI', function() {
  var searchPage = new SearchPage();

  // beforeEach(function() {
  // });

  it('should have a title', function() {
    browser.get('https://amatravel.test-wip.tstllc.net/prepack#/landing');
    expect(browser.getTitle()).toEqual('Prepack');
    // dump(browser)
  });

  it('should have a departure drop down', function(){
    expect(searchPage.departureDropDown.isDisplayed()).toBe(true);
  });

  it('then I input Nassau in the Departure', function(){
    searchPage.departureDropDownClear.click();
    searchPage.departureDropDown.sendKeys('Nassau');
  });

  it('then I should see  Nassau in the Departure', function(){
    console.log("departure text - " + searchPage.departureDropDown.getText())
    // expect(searchPage.departureDropDown.getText()).toEqual('Nassau');
  });
       
});