import { Ship } from './Ship.js';
import { manageTurn } from './manageTurn.js';
import { placeShip } from './placeShip.js';

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







function render(player, id, player1, player2, player1Count, player2Count, playerCount, currTurn) {
    const ele = document.createElement('div');
    const mainCont = document.querySelector('#mainContainer');

    const outerDiv = document.createElement('div');
    outerDiv.id = id;
    outerDiv.textContent = id;
    player.board.board.forEach((row, rowIndex) => {
        const rowEle = document.createElement('div');
        rowEle.id = 'row' + rowIndex;
        row.forEach((item, colIndex) => {
            const itemEle = document.createElement('div');
            if (item instanceof Ship) {
                if (item.isShipSunk()) {
                    itemEle.textContent = 'X';
                } else {
                    itemEle.textContent = 'ship';
                }

            } else {
                itemEle.textContent = item;
            }

            itemEle.id = rowIndex + '-' + colIndex;
            itemEle.classList.add(id);
            if (playerCount < 5) {
                itemEle.addEventListener('click', function() { placeShip(itemEle, player1, player2, player1Count, player2Count, currTurn) });
            } else {
                itemEle.addEventListener('click', function() { manageTurn(itemEle, player1, player2, player1Count, player2Count, currTurn) });
            }
            rowEle.appendChild(itemEle);
        });
        outerDiv.appendChild(rowEle);

        if (id === 'player1' && currTurn === 'player1') {
            outerDiv.classList.add('active');
        } else if (id === 'player2' && currTurn === 'player2') {
            outerDiv.classList.add('active');
        }
        mainCont.appendChild(outerDiv);
    });
}

export { render };