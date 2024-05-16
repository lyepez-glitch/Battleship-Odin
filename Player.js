import { GameBoard } from './GameBoard.js';

class Player {
    constructor(playerType) {
        this._type = playerType;
        this._board = new GameBoard();
    }
    get type() {
        return this._type;
    }
    get board() {
        return this._board;
    }

}
export { Player };