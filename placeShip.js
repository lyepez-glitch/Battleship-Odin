import { Ship } from './Ship.js';
import { manageTurn } from './manageTurn.js';
import { render } from './render.js';


function placeShip(piece, player1, player2, player1Count, player2Count, currTurn) {

    const id = piece.id.split('-');

    let row = id[0],
        col = id[1];

    const ship = new Ship(2);

    function handleClick() {
        manageTurn(col, player1, player2, player1Count, player2Count, currTurn);
    }

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


                    col.addEventListener('click', handleClick);
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
                    col.removeEventListener('click', function() { placeShip(piece, player1, player2, player1Count, player2Count, currTurn) });


                    col.addEventListener('click', handleClick);
                })
            }
        }
    }


    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = ""
    render(player1, 'player1', player1, player2, player1Count, player2Count, player1Count, currTurn);
    render(player2, 'player2', player1, player2, player1Count, player2Count, player2Count, currTurn);
}

export { placeShip };