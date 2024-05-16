// const Player = require('./Player');
import { Player } from './Player.js';
import { newGame, render } from './DomActions.js';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', newGame);




});