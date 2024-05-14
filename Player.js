class Player {
    constructor(type) {
        this.type = type;
        this.board = new GameBoard();
    }
    getType() {
        return this.type();
    }

}
module.exports = Player;