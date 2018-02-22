export default class Tile {
    /**
     *
     * @param {Array.<Array>} struct
     * @param {number} price
     * @param {number} timePrice
     * @param {number} coins
     */
    constructor(id, {struct, price, timePrice, coins}) {
        this.id = id;
        this.struct = struct;
        this.price = price;
        this.timePrice = timePrice;
        this.coins = coins;
    }

}