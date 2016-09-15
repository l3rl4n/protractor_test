module.exports = function() {

    this.Given(/^I go to "([^"]*)"$/, function (site, cb) {
        browser.get(site)
            .then(cb);
    });

    this.Given(/^I search via the new prepack ui: (.*?)$/, function (options, cb) {
        console.log("I HAVE NO IDEA HOW TO DO ALL THE FANCY THINGS WITH HASHES YET IN JS")
        console.log("Here are my options" + options)
        cb();
    })

}