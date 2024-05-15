// const Player = require('./Player');
import { Player } from './Player.js';
import { newGame, render } from './DomActions.js';

const newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);