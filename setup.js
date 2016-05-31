/**
 * Created by cvillanueva on 5/17/2016.
 */
var Unit = require("unit.js");

module.exports.setup = function() {
    var units = {};
    for(var i = 0; i < 8; i++)
        units[i] = new Unit(0, i*8, 0);

    return units;
}

console.log("asdf");