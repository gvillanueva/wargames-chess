/**
 * @file Defines the behavior of the Rook in chess
 * @author Giancarlo Villanueva
 */
var WargamesUnit = require("../wargames/unit.js");
var WargamesError = require("../wargames/error.js");

Rook.prototype = Object.create(WargamesUnit.prototype);
Rook.prototype.constructor = Rook;

function Rook(x, y, z, image) {
    WargamesUnit.prototype.constructor.call(this,x,y,z,image);
}

/**
 *
 * @param x X-coordinate of unit's destination.
 * @param y Y-coordinate of unit's destination.
 * @param z Z-coordinate of unit's destination.
 */
Rook.prototype.move = function(x, y, z) {
    console.log("Rook.move()");
    if (x != this.x || y != this.y)
        throw new WargamesError("Invalid move: Rook must move in a straight line");

    WargamesUnit.prototype.move.call(this,x,y,z);
}

module.exports = Rook;
