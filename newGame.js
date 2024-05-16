import { placeShip }
from './placeShip.js';
import { render }
from './render.js';
import { Player } from './player.js';
let currTurn = 'player1';

function newGame(player1, player2, player1Count, player2Count) {
    player1 = new Player('Real');
    player2 = new Player('Computer');
    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = "";

    render(player1, 'player1', player1, player2, player1Count, player2Count, player1Count, currTurn);
    render(player2, 'player2', player1, player2, player1Count, player2Count, player2Count, currTurn);

    const player1Board = document.querySelector('#player1');
    const player2Board = document.querySelector('#player2');
    for (let i = 0; i <= 2; i++) {
        const id = 'row' + i;
        const ele1 = player1Board.querySelector('#' + id);
        const ele2 = player2Board.querySelector('#' + id);
        const pieces1 = ele1.querySelectorAll('.player1');
        const pieces2 = ele2.querySelectorAll('.player2');

        pieces1.forEach((piece) => {
            piece.addEventListener('click', function() { placeShip(piece, player1, player2, player1Count, player2Count, currTurn) });
        });
        pieces2.forEach((piece) => {
            piece.addEventListener('click', function() { placeShip(piece, player1, player2, player1Count, player2Count, currTurn) });
        });
    }

    if (player1Board) {
        player1Board.classList.add('active');
    }
}



export { newGame };