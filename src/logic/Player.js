import Board from './Board';

export default class Player {
    /**
     *
     * @param {string} name
     */
    constructor(name = 'player') {
        this.name = name;
        this.money = 5;
        this.time = 0;
        this.board = new Board();
    }
}