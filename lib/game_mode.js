let m = require('./monster');
let readlineSync = require('readline-sync');

console.log('\n\nSEGÍTSÉG\n');
console.log('Lőszer: bal felső sarok');
console.log('Szörnyek: jobb felső sarok\n\n');
console.log('Válassz játék módot!');

let setinter = ['easy', 'medium', 'hard', 'Feri', 'Tasi'];
let index = readlineSync.keyInSelect(setinter, 'Melyik módot szeretnéd?');

let time;
const gameMode = () => {
  switch (index) {
    case 0 :
      m.monsters = new Array(5);
      time = 300;
      break;
    case 1 :
      m.monsters = new Array(8);
      time = 200;
      break;
    case 2:
      m.monsters = new Array(15);
      time = 150;
      break;
    case 3:
      m.monsters = new Array(3);
      time = 600;
      break;
    case 4:
      m.monsters = new Array(25);
      time = 100;
  }
  return time;
};
const gameMode2 = (maze) => {
  switch (index) {
    case 0 :
      maze.length = 31;
      maze.width = 61;
      break;
    case 1 :
      maze.length = 31;
      maze.width = 71;
      break;
    case 2:
      maze.length = 31;
      maze.width = 91;
      break;
    case 3:
      maze.length = 15;
      maze.width = 21;
      break;
    case 4:
      maze.length = 37;
      maze.width = 121;
  }
  return maze;
};

const win = () => {
  console.log('     W                 W     I      NN      N');
  console.log('      W               W      I      N N     N');
  console.log('       W             W       I      N  N    N');
  console.log('        W     W     W        I      N   N   N');
  console.log('         W   W W   W         I      N    N  N');
  console.log('          W W   W W          I      N     N N');
  console.log('           W     W           I      N      NN');

  process.exit(1);
};

const gameOver = (monsters) => {
  let bool = false;
  for (let i = 0; i < monsters.length; i++) {
    if (monsters[i].isGameOver === true) {
      bool = true;
    }
  }
  return bool;
};

const printGameOver = () => {
  console.clear();
  console.log('GAME OVER');
  process.exit(1);
};
module.exports = { printGameOver, gameMode, gameMode2, win, gameOver };
