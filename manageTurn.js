import { Ship } from './ship.js';
import { render } from './render.js';

function manageTurn(piece, player1, player2, count) {

    const player1Board = document.querySelector('#player1');
    const player2Board = document.querySelector('#player2');
    const ship = new Ship(2);

    const id = piece.id.split('-');
    let row = id[0],
        col = id[1];





    player2._board.receiveAttack(row, col)

    if (player2._board.allSunk()) {
        alert("player1 wins!");
        return;
    }


    player2Board.classList.add('active');
    player1Board.classList.remove('active');


    setTimeout(function() {
        player1._board.randomReceiveAttack(row, col)

        if (player1._board.allSunk()) {
            alert("player2 wins!");
            return;
        }
        player1Board.classList.add('active');
        player2Board.classList.remove('active');
    }, 5000)








    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = "";

    render(player1, 'player1', player1, player2, count);
    render(player2, 'player2', player1, player2, count);

}

export { manageTurn };