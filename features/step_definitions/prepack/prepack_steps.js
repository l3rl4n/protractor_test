// this will ideally be in its own module
var SearchPage = function() {
    this.departureDropDown        = $("[name=departing]");
    this.departureDropDownClear   = element.all(by.css("button.ng-scope")).first()
    this.destinationDropDown      = $("[name=destination]");
    this.destinationDropDownClear = element.all(by.css("button.ng-scope")).last()
};

module.exports = function() {

    this.Given(/^I go to "([^"]*)"$/, function (site, cb) {
        browser.get(site)
            .then(cb);
    });

    this.Given(/^I search via the new prepack ui: (.*?)$/, function (_options_, cb) {
        var options = {}
        var sP = new SearchPage()

        options = _options_.split('; ')
        for (i in options) {
            k = options[i].split(':')[0].trim()
            v = options[i].split(':')[1].trim()
            options[k] = v
        }

        sP.departureDropDownClear.click();
        sP.departureDropDown.sendKeys('Nassau');
        //expect(sP.departureDropDown.getAttribute('value')).toEqual('Nassau');

        cb();
    })

}