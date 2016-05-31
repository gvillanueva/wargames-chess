/**
 * @file Defines the behavior of the Bishop in chess
 * @author Giancarlo Villanueva
 */
var WargamesUnit = require("../wargames/unit.js");
var WargamesError = require("../wargames/error.js");

Bishop.prototype = Object.create(WargamesUnit.prototype);
Bishop.prototype.constructor = Bishop;

function Bishop(x, y, z, image) {
    WargamesUnit.prototype.constructor.call(this,x,y,z,image);
}

/**
 *
 * @param x X-coordinate of unit's destination.
 * @param y Y-coordinate of unit's destination.
 * @param z Z-coordinate of unit's destination.
 */
Bishop.prototype.move = function(x, y, z) {
    console.log("Bishop.move()");
    if (x == this.x || y == this.y)
        throw new WargamesError("Invalid move: Bishop only move diagonally");

    WargamesUnit.prototype.move.call(this,x,y,z);
}

module.exports = Bishop;
