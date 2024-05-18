import { Ship } from './Ship.js';
import { manageTurn } from './manageTurn.js';
import { placeShip } from './placeShip.js';



function render(player, id, player1, player2, count) {
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
                    } else {
                        itemEle.textContent = 'hide';
                    }

                }

            } else {
                if (id !== 'player2') {
                    itemEle.textContent = item;
                } else {
                    itemEle.textContent = 'hide';
                }

            }

            itemEle.id = rowIndex + '-' + colIndex;
            itemEle.classList.add(id);
            if (count < 5) {
                if (id !== 'player2') {
                    itemEle.addEventListener('click', function() { placeShip(itemEle, player1, player2, count) });
                }

            } else {
                if (id !== 'player1') {
                    itemEle.addEventListener('click', function() { manageTurn(itemEle, player1, player2, count) });
                }

            }
            rowEle.appendChild(itemEle);
        });
        outerDiv.appendChild(rowEle);

        if (id === 'player1') {
            outerDiv.classList.add('active');
        }
        mainCont.appendChild(outerDiv);
    });
}

export { render };