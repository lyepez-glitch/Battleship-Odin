import { Player } from './Player.js';
import { render } from './render.js';
import { newGame } from './newGame.js';

let player1 = new Player('Real');
let player2 = new Player('Computer');
let player1Count = 0,
    player2Count = 0;

document.addEventListener("DOMContentLoaded", (event) => {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function() { newGame(player1, player2, player1Count, player2Count) });

});