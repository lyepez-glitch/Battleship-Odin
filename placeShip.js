import { Ship } from './Ship.js';
import { manageTurn } from './manageTurn.js';
import { render } from './render.js';

function handleClick() {
    manageTurn(col, player1, player2, player1Count, player2Count, currTurn);
}

function placeShip(piece, player1, player2, player1Count, player2Count, currTurn) {


    const ship = new Ship(2);

    if (piece.classList.contains('player1') && player1Count < 5) {
        const id = piece.id.split('-');

        let row = id[0],
            col = id[1];


        player1._board.place(ship, row, col)

        player1Count++;
        if (player1Count === 5) {

            const cont = document.querySelector('#player1');
            for (let i = 0; i <= 2; i++) {
                const row = cont.querySelector('#row' + i);
                const cols = row.querySelectorAll('.player1');

                cols.forEach((col) => {
                    col.removeEventListener('click', placeShip);


                    col.addEventListener('click', handleClick);
                })
            }
        }
    } else if (piece.classList.contains('player2') && player2Count < 5) {
        player2._board.randomPlace(ship);

        player2.player2Count++;

    }


    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = ""
    render(player1, 'player1', player1, player2, player1Count, player2.player2Count, player1Count, currTurn);
    render(player2, 'player2', player1, player2, player1Count, player2.player2Count, player2.player2Count, currTurn);
}

export { placeShip };