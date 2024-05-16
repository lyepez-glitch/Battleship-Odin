import { Ship } from './ship.js';
import { render } from './render.js';

function manageTurn(column, player1, player2, player1Count, player2Count, currTurn) {

    const player1Board = document.querySelector('#player1');
    const player2Board = document.querySelector('#player2');
    const ship = new Ship(2);

    const id = column.id.split('-');
    let row = id[0],
        col = id[1];



    if (player1Board.classList.contains('active')) {

        player2._board.receiveAttack(row, col)
        console.log('player2._board.allSunk()', player2._board.allSunk())
        if (player2._board.allSunk()) {
            alert("player1 wins!");
        }

    } else {
        player1._board.receiveAttack(row, col)

        if (player1._board.allSunk()) {
            alert("player2 wins!");
        }

    }


    if (currTurn === 'player1') {
        player2Board.classList.add('active');
        player1Board.classList.remove('active');
        currTurn = 'player2';

    } else if (currTurn === 'player2') {
        player1Board.classList.add('active');
        player2Board.classList.remove('active');
        currTurn = 'player1';
    }

    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = "";

    render(player1, 'player1', player1, player2, player1Count, player2Count, player1Count, currTurn);
    render(player2, 'player2', player1, player2, player1Count, player2Count, player2Count, currTurn);

}

export { manageTurn };