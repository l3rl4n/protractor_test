// spec.js
var SearchPage = function() { 
  this.departureDropDown      = $("[name=departing]");
  this.departureDropDownClear = element.all(by.css("button.ng-scope")).first()
  this.destinationDropDown    = $("[name=destination]");
};

describe('Given I load the new prepack UI', function() {
  var sP = new SearchPage();

  // beforeEach(function() {
  // });

  it('should have a title', function() {
    browser.get('https://amatravel.test-wip.tstllc.net/prepack#/landing');
    expect(browser.getTitle()).toEqual('Prepack');
    // dump(browser)
  });

  it('should have a departure drop down', function(){
    expect(sP.departureDropDown.isDisplayed()).toBe(true);
  });

  it('then I input Nassau in the Departure', function(){
    sP.departureDropDownClear.click();
    sP.departureDropDown.sendKeys('Nassau');
  });

  it('then I should see  Nassau in the Departure', function(){
    // sP.departureDropDown.getAttribute('value').then(function(text) {
    //   console.log("departure text - " + text);
    // });
    expect(sP.departureDropDown.getAttribute('value')).toEqual('Nassau');
  });
       
});