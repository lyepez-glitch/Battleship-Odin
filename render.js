import { Ship } from './Ship.js';
import { manageTurn } from './manageTurn.js';
import { placeShip } from './placeShip.js';



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
                    if (id !== 'player2') {
                        itemEle.textContent = 'X';
                    }

                } else {
                    if (id !== 'player2') {
                        itemEle.textContent = 'ship';
                    }

                }

            } else {
                if (id !== 'player2') {
                    itemEle.textContent = item;
                }

            }

            itemEle.id = rowIndex + '-' + colIndex;
            itemEle.classList.add(id);
            if (playerCount < 5) {
                if (id !== 'player2') {
                    itemEle.addEventListener('click', function() { placeShip(itemEle, player1, player2, player1Count, player2Count, currTurn) });
                }

            } else {
                if (id !== 'player2') {
                    itemEle.addEventListener('click', function() { manageTurn(itemEle, player1, player2, player1Count, player2Count, currTurn) });
                }

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