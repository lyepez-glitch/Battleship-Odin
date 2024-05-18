import { Ship } from './Ship.js';
import { render } from './render.js';
import { disallowPlacingShip } from './disallowPlaceShip';



function placeShip(piece, player1, player2, count) {


    const ship = new Ship(2);

    if (piece.classList.contains('player1') && count < 5) {
        const id = piece.id.split('-');

        let row = id[0],
            col = id[1];


        player1._board.place(ship, row, col)
        player2._board.randomPlace(ship);
        count++;

        if (count === 5) {

            disallowPlacingShip();
        }
    }


    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = ""
    render(player1, 'player1', player1, player2, count);
    render(player2, 'player2', player1, player2, count);
}

export { placeShip };