let follow = require('./follow');
let randomDir = require('./randomDir');
let can = require('./can_you_move');
let monsters;
let koefficient = {
  turnRight: 0.02,
  turnLeft: 0.04,
  turnBehind: 0.05
};
const generateMonsters = (arr, monsters) => {
  for (let i = 0; i < monsters.length; i++) {
    let generated = false;
    while (!generated) {
      monsters[i] = {
        xPos: Math.round(Math.random() * (arr[i].length - 10) + 5),
        yPos: Math.round(Math.random() * (arr.length - 10) + 5),
        dir: Math.floor(Math.random() * 4 + 1), // 1 balra 2 jobbra 3 fel 4 le
        isGameOver: false,
        isDead: false
      };
      if (arr[monsters[i].yPos][monsters[i].xPos] === ' ') {
        generated = true;
      }
    }
  }
  return monsters;
};

const destroyMonsters = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '*') {
        arr[i][j] = ' ';
      }
    }
  }
  return arr;
};

const moveMonsters = (arr, monsters) => {
  for (let i = 0; i < monsters.length; i++) {
    if (!monsters[i].isDead) {
      monsters[i] = randomDir.randomDir(monsters[i], koefficient);
    }
  }
  monsters = follow.doYCM(arr, monsters);
  for (let i = 0; i < monsters.length; i++) {
    if (monsters[i].isDead === false) {
      monsters[i] = isGameOver(arr, monsters[i]);
      while (!can.canMove(arr, monsters[i], ' ', '+')) {
        monsters[i].dir = Math.floor(Math.random() * 4 + 1);
      }
    }
  }
  for (let i = 0; i < monsters.length; i++) {
    if (monsters[i].isDead === false) {
      monsters[i] = move(monsters[i]);
      monsters[i] = isDeadMonster(arr, monsters[i]);
    }
  }
  return monsters;
};

const isDeadMonster = (arr, monster) => {
  let dead = can.canMove1(arr, monster, '+');
  monster.isDead = dead;
  return monster;
};

const isGameOver = (arr, monster) => {
  switch (monster.dir) {
    case 1: if (arr[monster.yPos][monster.xPos - 1] === '$') {
      monster.isGameOver = true;
    } break;
    case 2: if (arr[monster.yPos][monster.xPos + 1] === '$') {
      monster.isGameOver = true;
    } break;
    case 3: if (arr[monster.yPos - 1][monster.xPos] === '$') {
      monster.isGameOver = true;
    } break;
    case 4: if (arr.length - 1 !== monster.yPos && arr[monster.yPos + 1][monster.xPos] === '$') {
      monster.isGameOver = true;
    } break;
  }
  return monster;
};

const move = (monster) => {
  switch (monster.dir) {
    case 1: monster.xPos = monster.xPos - 1; break;
    case 2: monster.xPos = monster.xPos + 1; break;
    case 3: monster.yPos = monster.yPos - 1; break;
    case 4: monster.yPos = monster.yPos + 1; break;
  }
  return monster;
};

const win = (monsters) => {
  for (let i = 0; i < monsters.length; i++) {
    if (monsters[i].isDead === false) {
      return false;
    }
  }
  return true;
};

module.exports = { generateMonsters, moveMonsters, monsters, destroyMonsters, win };
