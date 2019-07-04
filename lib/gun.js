let bulletN = 5;
let guns = new Array(bulletN);
let bullet = {
  xPos: 0,
  yPos: 0,
  dir: 0,
  onBoard: false
}; // 1fel 2le 3 bal 4 jobb

const initgun = () => {
  for (let i = 0; i < guns.length; i++) {
    guns[i] = bullet;
  }
  return guns;
};

const isThereWall = (gun, arr, char) => {
  if (gun.dir === 1) {
    if (arr[gun.xPos - 1][gun.yPos] === char) {
      return true;
    }
    return false;
  } else if (gun.dir === 2) {
    if (arr[gun.xPos + 1][gun.yPos] === char) {
      return true;
    }
    return false;
  } else if (gun.dir === 3) {
    if (arr[gun.xPos][gun.yPos - 1] === char) {
      return true;
    }
    return false;
  } else if (gun.dir === 4) {
    if (arr[gun.xPos][gun.yPos + 1] === char) {
      return true;
    }
    return false;
  }
};

const move = (guns, arr) => {
  for (let i = 0; i < guns.length; i++) {
    if (guns[i].onBoard) {
      switch (guns[i].dir) {
        case 1:
          if (isThereWall(guns[i], arr, ' ') || isThereWall(guns[i], arr, '$')) {
            guns[i].xPos = guns[i].xPos - 1;
          } break;
        case 2:
          if (isThereWall(guns[i], arr, ' ') || isThereWall(guns[i], arr, '$')) {
            guns[i].xPos = guns[i].xPos + 1;
          } break;

        case 3:
          if (isThereWall(guns[i], arr, ' ') || isThereWall(guns[i], arr, '$')) {
            guns[i].yPos = guns[i].yPos - 1;
          } break;
        case 4:
          if (isThereWall(guns[i], arr, ' ') || isThereWall(guns[i], arr, '$')) {
            guns[i].yPos = guns[i].yPos + 1;
          } break;
      }
    }
  }
  return guns;
};

const destroygun = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '+') {
        arr[i][j] = ' ';
      }
    }
  }

  return arr;
};
const nullgun = (gun) => {
  gun.xPos = 0;
  gun.yPos = 0;
  gun.dir = 0;
  gun.onBoard = false;
  return gun;
};
const destroyGunWall = (guns, arr) => {
  for (let i = 0; i < guns.length; i++) {
    switch (guns[i].dir) {
      case 1:
        if (arr[guns[i].xPos - 1][guns[i].yPos] === '▉') {
          guns[i] = nullgun(guns[i]);
        } break;
      case 2:
        if (arr[guns[i].xPos + 1][guns[i].yPos] === '▉') {
          guns[i] = nullgun(guns[i]);
        } break;
      case 3:
        if (arr[guns[i].xPos][guns[i].yPos - 1] === '▉') {
          guns[i] = nullgun(guns[i]);
        } break;
      case 4:
        if (arr[guns[i].xPos][guns[i].yPos + 1] === '▉') {
          guns[i] = nullgun(guns[i]);
        }
    }
  }
  return guns;
};
const isThereGun = (x, y) => {
  for (let i = 0; i < guns.length; i++) {
    if (x === guns[i].xPos && y === guns[i].yPos) {
      return true;
    }
  }
  return false;
};

const startgun = (player, guns) => {
  let gunIndex = guns.findIndex(gun => !gun.onBoard);
  guns[gunIndex] = {
    dir: player.dir,
    xPos: player.xPos,
    yPos: player.yPos,
    onBoard: true
  };
  return guns;
};

module.exports = { guns, destroygun, destroyGunWall, startgun, isThereGun, move, initgun };
