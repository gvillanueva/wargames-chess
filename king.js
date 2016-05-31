/**
 * @file Defines the behavior of the King in chess
 * @author Giancarlo Villanueva
 */
var WargamesUnit = require("../wargames/unit.js");
var WargamesError = require("../wargames/error.js");

King.prototype = Object.create(WargamesUnit.prototype);
King.prototype.constructor = King;

function King(x, y, z, image) {
    WargamesUnit.prototype.constructor.call(this,x,y,z,image);
}

/**
 *
 * @param x X-coordinate of unit's destination.
 * @param y Y-coordinate of unit's destination.
 * @param z Z-coordinate of unit's destination.
 */
King.prototype.move = function(x, y, z) {
    console.log("King.move()");
    if (x != this.x)
        throw new WargamesError("Invalid move: King only move diagonally when attacking");

    WargamesUnit.prototype.move.call(this,x,y,z);
}

module.exports = King;
