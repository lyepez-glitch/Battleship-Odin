import { Player } from './Player.js';

import { Ship } from './Ship.js';

let player1 = new Player('Real');
let player2 = new Player('Computer');
let player1Count, player2Count = 0;

//         if (curr === player1) {
//             //computer clicks here
//             // const randRow = Math.random() * 3;
//             // const randCol = Math.random() * 3;
//             // or no click just do thesame func by copying this logic in a computer func and call that
//             // it gets the active class
//             // it gets random row index and col index out of the 3 rows and 9 columns
//             // if player2 board.coords and board.missedAttacks doesn't include random rol and col
//             //   player2.board.place(ship,randomrow,randomcol)
//         }


//     }
// }

// function render(player, id) {
//
//
//         if (!outerDiv.classList.contains('active')) {
//             outerDiv.classList.add('active')
//         } else {
//             outerDiv.classList.remove('active');
//         }







function render(player, id) {
    console.log("render");
    const ele = document.createElement('div');
    const mainCont = document.querySelector('#mainContainer');
    const outerDiv = document.createElement('div');
    outerDiv.id = id;
    outerDiv.textContent = id;
    console.log("player.board", player.board.board, typeof player.board.board)
    player.board.board.forEach((row, rowIndex) => {
        const rowEle = document.createElement('div');
        rowEle.id = 'row' + rowIndex;
        row.forEach((item, colIndex) => {
            const itemEle = document.createElement('div');
            if (item instanceof Ship) {
                itemEle.textContent = 'ship';
            } else {
                itemEle.textContent = item;
            }

            itemEle.id = rowIndex + '-' + colIndex;
            // itemEle.addEventListener('click', manageTurn);
            itemEle.classList.add(id);
            rowEle.appendChild(itemEle);
        })

        outerDiv.appendChild(rowEle);
        mainCont.appendChild(outerDiv);
    })
}

function newGame() {
    console.log("new game");
    player1 = new Player('Real');
    player2 = new Player('Computer');
    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = "";



    render(player1, 'player1');
    render(player2, 'player2');
    const player1Board = document.querySelector('#player1');
    const player2Board = document.querySelector('#player2');
    for ((let i = 0; i <= 2; i++)) {
        const id = 'row' + i;
        const ele1 = player1Board.querySelector('#' + id);
        const ele = playerBoard.querySelector('#' + id);
        ele1.forEach((piece) => {
            piece.addEventListener('click', function() { placeShip(piece) })
        })
        ele2.forEach((piece) => {
            piece.addEventListener('click', function() { placeShip(piece) })
        })
    }
    console.log("player1Board", player1Board)
    if (player1Board) {
        player1Board.classList.add('active');
    }


}

function placeShip(piece) {
    const id = piece.id.split('-');
    let row = id[0],
        col = id[2];
    const ship = new Ship(2);
    if (piece.classList.contains('player1') && player1Count < 5) {
        player1._board.place(ship, row, col)
        player1Count++;
        if (player1Count === 5) {
            const cont = document.querySelector('#player1');
            for (let i = 0; i <= 2; i++) {
                const row = cont.querySelector('#row' + i);
                const cols = row.querySelectorAll('.player1');
                cols.forEach((col) => {
                    col.removeEventListener('click', placeShip);
                    col.addEventListener('click', manageTurn);
                })
            }
        }
    } else if (piece.classList.contains('player2') && player2Count < 5) {
        player2._board.place(ship, row, col)
        player2Count++;
        if (player2Count === 5) {
            const cont = document.querySelector('#player2');
            for (let i = 0; i <= 2; i++) {
                const row = cont.querySelector('#row' + i);
                const cols = row.querySelectorAll('.player2');
                cols.forEach((col) => {
                    col.removeEventListener('click', placeShip);
                    col.addEventListener('click', manageTurn);
                })
            }
        }
    }



    //piece.addEventListener('click', manageTurn);
    render(player1, 'player1');
    render(player2, 'player2');
}

function manageTurn(event) {
    console.log("manageTurn");
    const player1Board = document.querySelector('#player1');
    const player2Board = document.querySelector('#player2');
    const ship = new Ship(2);
    const id = event.target.id.split('-');
    let row = id[0],
        col = id[2];


    console.log("player2", player2._board)
    let curr;
    if (player1Board.classList.contains('active')) {
        player2._board.receiveAttack(row, col)
        if (player2._board.allSunk()) {
            alert("player1 wins!");
        }

    } else {
        player1._board.receiveAttack(row, col)
        if (player1._board.allSunk()) {
            alert("player2 wins!");
        }

    }


    if (player1Board.classList.contains('active')) {
        player2Board.classList.add('active');
        player1Board.classList.remove('active');

    } else if (player2Board.classList.contains('active')) {
        player1Board.classList.add('active');
        player2Board.classList.remove('active');
    }

}
export { newGame, render };