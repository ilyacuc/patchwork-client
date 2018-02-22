import Tile from './Tile';

export default class TilesTrack {
    constructor(config) {
        /**
         * @type {Array.<Tile>}
         */
        this.tilesList = [];
        let position = 0;
        let min = Infinity;
        config.forEach((tile, index) => {
            this.tilesList.push(new Tile(index, tile));

            const tileSize = tile.struct.reduce((result, tileRow) => result + tileRow.reduce((r, cell) => r + cell, 0), 0);
            if (tileSize < min) {
                min = tileSize;
                position = index;
            }
        });

        /**
         * @type {number}
         */
        this.position = position;
    }

    /**
     *
     * @param tileId
     * @returns {Tile} tile
     */
    pickTile(tileId) {
        const tileIndex = this.tilesList.findIndex(({ id }) => id === tileId);
        if (!tileIndex) {
            console.error('no tile', { tileId, tileIndex, list: [...this.tilesList] });
            throw new Error('no tile');
        }
        const tile = this.tilesList[tileIndex];
        this.tilesList.splice(tileIndex, 1);

        return tile;
    }
}