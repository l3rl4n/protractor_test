module.exports = function() {

    this.Given(/^I go to "([^"]*)"$/, function (site, cb) {
        browser.get(site)
            .then(cb);
    });

    this.Given(/^I search via the new prepack ui: (.*?)$/, function (options, cb) {
        var params = {}

        Options = options.split('; ')
        for (i in Options) {
            k = Options[i].split(':')[0].trim()
            v = Options[i].split(':')[1].trim()
            params[k] = v
        }

        console.log(params)
        cb();
    })

}