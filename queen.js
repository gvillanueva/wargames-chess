/**
 * @file Defines the behavior of the Queen in chess
 * @author Giancarlo Villanueva
 */
var WargamesUnit = require("../wargames/unit.js");
var WargamesError = require("../wargames/error.js");

Queen.prototype = Object.create(WargamesUnit.prototype);
Queen.prototype.constructor = Queen;

function Queen(x, y, z, image) {
    WargamesUnit.prototype.constructor.call(this,x,y,z,image);
}

/**
 *
 * @param x X-coordinate of unit's destination.
 * @param y Y-coordinate of unit's destination.
 * @param z Z-coordinate of unit's destination.
 */
Queen.prototype.move = function(x, y, z) {
    console.log("Queen.move()");
    WargamesUnit.prototype.move.call(this,x,y,z);
}

module.exports = Queen;
