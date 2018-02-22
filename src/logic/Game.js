import TilesTrack from './TilesTrack';
import TimeBoard from './TimeBoard';

export default class Game {
    /**
     *
     * @param {Object} config
     * @param {Array.<Player>} players
     */
    constructor(config, players) {
        this.players = players;
        this.activePlayer = this.players[0];
        this.tilesTrack = new TilesTrack(config.tiles);
        this.timeBoard = new TimeBoard(config);
    }

    makeMoveTile(tileId, position) {
        const tile = this.tilesTrack.pickTile(tileId);
        const player = this.activePlayer;

        if (tile.price <= player.money) {
            player.board.putTile(tile, position);
            if (this.timeBoard.checkMoneyBb(player.time, player.time + tile.timePrice)) {
                player.money += player.board.countCoins();
            }
            player.money -= tile.price;
            player.time += tile.timePrice;

            const nextPlayer = this.getNextPlayer();
            if (player.time > nextPlayer.time) {
                this.activePlayer = nextPlayer;
            }
        }
    }

    makeMoveMoney() {
        const player = this.activePlayer;
        const nextPlayer = this.getNextPlayer();
        player.time = nextPlayer.time + 1;
        this.activePlayer = nextPlayer;
    }

    /**
     *
     * @returns {Player} player
     */
    getNextPlayer() {
        const currentActivePlayerIndex = this.players.findIndex((player) => player === this.activePlayer);
        return this.players[(currentActivePlayerIndex + 1) % this.players.length]
    }
}