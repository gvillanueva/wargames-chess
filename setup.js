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

        // Set up back line light units
        units[i++] = new Rook(0, 0, 0, ":/chess/images/wRook.bmp");
        units[i++] = new Knight(1 * GRID_SIZE_SCALED, 0, 0, ":/chess/images/wKnight.bmp");
        units[i++] = new Bishop(2 * GRID_SIZE_SCALED, 0, 0, ":/chess/images/wBishop.bmp");
        units[i++] = new King(3 * GRID_SIZE_SCALED, 0, 0, ":/chess/images/wKing.bmp");
        units[i++] = new Queen(4 * GRID_SIZE_SCALED, 0, 0, ":/chess/images/wQueen.bmp");
        units[i++] = new Bishop(5 * GRID_SIZE_SCALED, 0, 0, ":/chess/images/wBishop.bmp");
        units[i++] = new Knight(6 * GRID_SIZE_SCALED, 0, 0, ":/chess/images/wKnight.bmp");
        units[i++] = new Rook(7 * GRID_SIZE_SCALED, 0, 0, ":/chess/images/wRook.bmp");

        // Set up front line light units
        for (var wp = 0; wp < 8; wp++)
            units[i++] = new Pawn(
                wp * GRID_SIZE_SCALED,
                1 * GRID_SIZE_SCALED,
                0,
                ":/chess/images/wPawn.bmp"
            );

        // Set up front line dark units
        for (var bp = 0; bp < 8; bp++)
            units[i++] = new Pawn(
                bp * GRID_SIZE_SCALED,
                6 * GRID_SIZE_SCALED,
                0,
                ":/chess/images/bPawn.bmp"
            );

        // Set up back line dark units
        units[i++] = new Rook(0, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bRook.bmp");
        units[i++] = new Knight(1 * GRID_SIZE_SCALED, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bKnight.bmp");
        units[i++] = new Bishop(2 * GRID_SIZE_SCALED, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bBishop.bmp");
        units[i++] = new King(3 * GRID_SIZE_SCALED, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bKing.bmp");
        units[i++] = new Queen(4 * GRID_SIZE_SCALED, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bQueen.bmp");
        units[i++] = new Bishop(5 * GRID_SIZE_SCALED, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bBishop.bmp");
        units[i++] = new Knight(6 * GRID_SIZE_SCALED, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bKnight.bmp");
        units[i++] = new Rook(7 * GRID_SIZE_SCALED, 7 * GRID_SIZE_SCALED, 0, ":/chess/images/bRook.bmp");


        return {
            bounds: {
                x: 0, y: 0,
                w: GRID_SIZE_SCALED * GRID_COLS,
                h: GRID_SIZE_SCALED * GRID_ROWS
            },
            background: ":/images/board.bmp",
            units: units
        };
    }
}
