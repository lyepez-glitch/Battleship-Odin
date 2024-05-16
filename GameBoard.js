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

        let count = 0;
        this.board.forEach((row) => {
            row.forEach((item) => {

                if (item !== 0) {
                    console.log("item", item, item.isShipSunk())
                    if (item.isShipSunk()) {
                        count++;
                    }
                }
            })

        })
        if (count < 5) {
            return false
        } else {
            return true;
        }

    }
}