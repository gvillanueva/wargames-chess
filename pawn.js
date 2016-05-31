/**
 * @file Defines the behavior of the Pawn in chess
 * @author Giancarlo Villanueva
 */
var WargamesUnit = require("../wargames/unit.js");
var WargamesError = require("../wargames/error.js");

Pawn.prototype = Object.create(WargamesUnit);
Pawn.prototype.constructor = Pawn;

function Pawn(x,y,z,image) {
    WargamesUnit.prototype.constructor.call(this,x,y,z,image);
}

/**
 *
 * @param x X-coordinate of unit's destination.
 * @param y Y-coordinate of unit's destination.
 * @param z Z-coordinate of unit's destination.
 */
Pawn.prototype.move = function(x,y,z) {
    WargamesUnit.prototype.move.call(this,x,y,z);
    console.log("Pawn.move()");
    if (x != this.x)
        throw new WargamesError("Invalid move: Pawn only move diagonally when attacking");
}

module.exports = Pawn;
