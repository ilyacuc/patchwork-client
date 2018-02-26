import { rotateMatrix } from '../utils';

export default class Board {
    constructor() {
        /**
         *
         * @type {Array.<Object{tile: <Tile>, position: Object}>}
         */
        this.tiles = [];
        this.board = Array(9).fill(0).map(() => Array(9).fill(0));
    }

    /**
     *
     * @param {Tile} tile
     * @param {Object} position
     */
    putTile(tile, position) {
        const { x, y, r } = position;
        const rotatedTile = rotateMatrix(tile.struct, r);
        const width = rotatedTile[0].length;
        const height = rotatedTile.length;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (rotatedTile[i][j]) { // Checks only not empty cells
                    if (this.board[y + i][x + j]) {
                        //todo rollback filled cells in board
                        throw new Error('tile does not fit');
                    }
                    this.board[y + i][x + j] = tile.id;
                }
            }
        }

        this.tiles.push({ tile, position });
    }

    countCoins() {
        return this.tiles.reduce((result, tile) => result + tile.coins, 0);
    }
}