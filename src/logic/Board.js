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
        this.tiles.push({ tile, position });
    }

    countCoins() {
        return this.tiles.reduce((result, tile) => result + tile.coins, 0);
    }
}