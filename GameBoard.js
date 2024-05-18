export class GameBoard {
    constructor() {
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.missedAttacks = [];
        this.placed = [];
        this.coords = [];
    }
    getBoard() {
        return this.board;
    }
    place(ship, row, column) {
        this.board[row][column] = ship;
    }
    isPlaced(randomIndex, randomCol) {
        this.placed.forEach((obj) => {
            if (obj["row"] === randomIndex && obj["col"] === randomCol) {
                return true;
            }

        })
        return false;
    }
    isMissed(randomIndex, randomCol) {
        this.missedAttacks.forEach((obj) => {
            if (obj["row"] === randomIndex && obj["col"] === randomCol) {
                return true;
            }

        })
        return false;
    }



    isAttacked = (row, col) => {
        this.coords.forEach((coord) => {
            if (coord.includes(row) && coord.includes(col)) {
                return true;
            }
        })
        return false;
    }
    randomReceiveAttack = () => {
        let randomIndex = Math.floor(Math.random() * 10);
        let randomCol = Math.floor(Math.random() * 10);
        while (isMissed(randomIndex, randomCol) && isAttacked(randomIndex, randomCol)) {
            randomIndex = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 10);
        }
        const ship = this.board[randomIndex][randomCol];
        if (ship !== 0) {
            ship.hit();
            this.coords.push([row, column])
        } else {
            this.missed.push(randomIndex, randomCol)
        }
    }
    randomPlace = (ship) => {
        let randomIndex = Math.floor(Math.random() * 10);
        let randomCol = Math.floor(Math.random() * 10);
        while (isPlaced(randomIndex, randomCol)) {
            randomIndex = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 10);
        }

        this.board.forEach((row, rowIndex) => {
            if (randomIndex === rowIndex) {
                row.forEach((col, colIndex) => {
                    if (randomCol === colIndex) {
                        this.board[row][colIndex] === ship;
                    }
                })

            }

        })
        this.placed.push({ "row": randomIndex, "col": "colIndex" })
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