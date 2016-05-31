/**
 * @file Defines the extension points for checkers system
 * @author Giancarlo Villanueva
 */
const Pawn = require("./pawn.js");
const Rook = require("./rook.js");
const Knight = require("./knight.js");
const Bishop = require("./bishop.js");
const Queen = require("./queen.js");
const King = require("./king.js");

// Chessboard size constants
const GRID_SIZE = 2.25;
const GRID_ROWS = 8;
const GRID_COLS = 8;
const GRID_SCALE = 20;
const GRID_SIZE_SCALED = GRID_SIZE * GRID_SCALE;

module.exports = {
    /**
     *
     * @param users
     */
    preStart: function(users) {
    },

    /**
     * Sets up the units required for a game of checkers.
     * @returns {Object} Collection of  Unit-derived objects
     */
    setup: function() {
        var bounds = {};
        var units = {};
        var i = 0;

        // Set up light units
        for (var wp = 0; wp < 8; wp++)
            units[i++] = new Pawn(
                wp * GRID_SIZE_SCALED,
                1 * GRID_SIZE_SCALED, 0);

        // Set up dark units
        for (var bp = 0; bp < 8; bp++)
            units[i++] = new Pawn(
                bp * GRID_SIZE_SCALED,
                6 * GRID_SIZE_SCALED, 0);

        return {
            bounds: {
                x: 0, y: 0,
                w: GRID_SIZE_SCALED * GRID_COLS,
                h: GRID_SIZE_SCALED * GRID_ROWS },
            units: units
        };
    }
}
