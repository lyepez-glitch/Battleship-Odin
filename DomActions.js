import { Player } from './Player.js';

// const Player = require('./Player');
// const newGame = (type1, type2) => {
//     const player1 = new Player(type1);
//     const player2 = new Player(type2);
//     render(player1, 'player1');
//     render(player2, 'player2');

// }
// const newGameBtn = document.querySelector('#newGame');
// newGameBtn.addEventListener('click', newGame);

// const player1Board = document.querySelector('#player1');
// const player2Board = document.querySelector('#player2');

// function manageTurn(event) {
//     // if id of ele clicked is curr active
//     if (event.target.classList.contains('active')) {
//         const ship = new Ship(2);
//         let id = event.target.id.split('-');
//         let row = id[0],
//             col = id[2];
//         if (event.target.classList.contains('player1')) {
//             player1.board.place(ship, row, col);
//         } else if (event.target.classList.contains('player2')) {
//             player2.board.place(ship, row, col);
//         }
//     } else {
//         let curr, class;
//         if (event.target.classList.contains('player1')) {
//             curr = player1;
//             class = 'player1';

//         } else if (event.target.classList.contains('player2')) {
//             curr = player2;
//             class = 'player2';

//         }
//         curr.board.receiveAttack(row, col);
//         if (curr.board.allSunk()) {
//             alert(`${class} wins!`);
//             const mainCont = document.querySelector('#mainContainer');
//             mainCont.innerHTML = "";
//         }
//         render(player1, 'player1');
//         render(player2, 'player2');
//         if (curr === player1) {
//             //computer clicks here
//             // const randRow = Math.random() * 3;
//             // const randCol = Math.random() * 3;
//             // or no click just do thesame func by copying this logic in a computer func and call that
//             // it gets the active class
//             // it gets random row index and col index out of the 3 rows and 9 columns
//             // if player2 board.coords and board.missedAttacks doesn't include random rol and col
//             //   player2.board.place(ship,randomrow,randomcol)
//         }


//     }
// }

// function render(player, id) {
//     const ele = document.createElement('div');
//     const mainCont = document.querySelector('#mainContainer');
//     const outerDiv = document.createElement('div');
//     outerDiv.id = id;
//     player.board.forEach((row, rowIndex) => {
//         const rowEle = document.createElement('div');
//         rowEle.id = 'row' + rowIndex;
//         row.forEach((item, colIndex) => {
//             const itemEle = document.createElement('div');
//             itemEle.textContent = item;
//             itemEle.id = rowIndex + '-' + colIndex;
//             itemEle.addEventListener('click', manageTurn);
//             itemEle.classList.add(id);
//             rowEle.appendChild(itemEle);
//         })

//         outerDiv.appendChild(rowEle);
//         if (!outerDiv.classList.contains('active')) {
//             outerDiv.classList.add('active')
//         } else {
//             outerDiv.classList.remove('active');
//         }

//     })
//     mainCont.appendChild(outerDiv);


// }
// module.exports = { newGame, render };


function render(player, id) {
    console.log("render");
    const ele = document.createElement('div');
    const mainCont = document.querySelector('#mainContainer');
    const outerDiv = document.createElement('div');
    outerDiv.id = id;
    console.log("player.board", player.board.board, typeof player.board.board)
    player.board.board.forEach((row, rowIndex) => {
        const rowEle = document.createElement('div');
        rowEle.id = 'row' + rowIndex;
        row.forEach((item, colIndex) => {
            const itemEle = document.createElement('div');
            itemEle.textContent = item;
            itemEle.id = rowIndex + '-' + colIndex;
            itemEle.addEventListener('click', manageTurn);
            itemEle.classList.add(id);
            rowEle.appendChild(itemEle);
        })

        outerDiv.appendChild(rowEle);
        mainCont.appendChild(outerDiv);
    })
}

function newGame() {
    console.log("new game");
    const player1 = new Player('Real');
    const player2 = new Player('Computer');
    render(player1, 'player1');
    render(player2, 'player2');
}

function manageTurn() {
    console.log("manageTurn");
}
export { newGame, render };