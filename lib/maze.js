let player = require('./player');
let gun = require('./gun');
let m = require('./monster');
var ctx = require('axel');

const table = (arr) => {
  let gunCounter = 5;
  let monsterCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (gun.isThereGun(i, j) && i !== 0) {
        arr[i][j] = '+';
        gunCounter--;
      }
      for (let x = 0; x < m.monsters.length; x++) {
        if (player.isTherePlayer(i, j)) {
          arr[i][j] = '$';
        } else if (m.monsters[x].xPos === j && m.monsters[x].yPos === i && m.monsters[x].isDead === false) {
          arr[i][j] = '*';
          monsterCounter++;
        }
      }
    }
  }

  arr[0][0] = gunCounter;
  arr[0][arr[0].length - 1] = monsterCounter;

  ctx.bg(0, 0, 0);
  ctx.fg(25, 160, 255);

  return arr;
};

const writeTable = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let kiiras = '          ';
    for (let j = 0; j < arr[i].length; j++) {
      kiiras += arr[i][j];
    }
    process.stdout.write(`${kiiras}\n`);
  }
};

module.exports = { table, writeTable };
