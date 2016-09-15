module.exports = function() {

    this.World = function World(cb) {
        this.prop = "Hello from the World!";

        this.greetings = function (name, cb) {
            console.log("\n----Hello " + name);
            cb();
        };

        cb();
    }

}