export class GameBoard {
    constructor() {
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.missedAttacks = [];
        this.coords = [];
    }
    getBoard() {
        return this.board;
    }
    place(ship, row, column) {
        this.board[row][column] = ship;
    }
    receiveAttack(row, column) {
        const ship = this.board[row][column];
        if (ship !== 0) {
            ship.hit();
            this.coords.push([row, column])

        } else {
            this.missedAttacks.push([row, column])
        }
    }
    allSunk() {
        this.board.forEach((row) => {
            row.forEach((item) => {
                if (item !== 0) {
                    if (!item.isSunk()) {
                        return false;
                    }
                }
            })
        })
        return true;
    }
}