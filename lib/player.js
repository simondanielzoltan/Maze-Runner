// 1fel 2le 3 bal 4 jobb
let player = {
  xPos: 1,
  yPos: 1,
  dir: 4
};
const playerUp = (arr) => {
  if (arr[player.xPos - 1][player.yPos] === ' ') {
    player.xPos -= 1;
    player.dir = 1;
  }

  return player;
};

const playerDown = (arr) => {
  if (player.xPos + 1 !== arr.length) {
    if (arr[player.xPos + 1][player.yPos] === ' ') {
      player.xPos += 1;
      player.dir = 2;
    }
  } else {

  }
  return player;
};

const playerLeft = (arr) => {
  if (arr[player.xPos][player.yPos - 1] === ' ') {
    player.yPos -= 1;
    player.dir = 3;
  }
  return player;
};

const playerRight = (arr) => {
  if (arr[player.xPos][player.yPos + 1] === ' ') {
    player.yPos += 1;
    player.dir = 4;
  }
  return player;
};

const isTherePlayer = (x, y) => {
  if (x === player.xPos && y === player.yPos) {
    return true;
  }
  return false;
};

const movePlayer = (character, arr) => {
  if (character === 'w') {
    player = playerUp(arr);
  } else if (character === 's') {
    player = playerDown(arr);
  } else if (character === 'a') {
    player = playerLeft(arr);
  } else if (character === 'd') {
    player = playerRight(arr);
  }
  return player;
};

const destroyPlayer = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '$') {
        arr[i][j] = ' ';
      }
    }
  }
  return arr;
};
module.exports = { player, movePlayer, isTherePlayer, destroyPlayer };
