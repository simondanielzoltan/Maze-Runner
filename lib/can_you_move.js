const canMove = (arr1, monster, char, char2) => {
  if (monster.dir === 1) {
    if (arr1[monster.yPos][monster.xPos - 1] === char || arr1[monster.yPos][monster.xPos - 1] === char2) {
      return true;
    }
    return false;
  } else if (monster.dir === 2) {
    if (arr1[monster.yPos][monster.xPos + 1] === char || arr1[monster.yPos][monster.xPos - 1] === char2) {
      return true;
    }
    return false;
  } else if (monster.dir === 3) {
    if (arr1[monster.yPos - 1][monster.xPos] === char || arr1[monster.yPos][monster.xPos - 1] === char2) {
      return true;
    }
    return false;
  } else if (monster.dir === 4) {
    if ((arr1.length - 1 !== monster.yPos && arr1[monster.yPos + 1][monster.xPos] === char) || arr1[monster.yPos][monster.xPos - 1] === char2) {
      return true;
    }
    return false;
  }
};

const canMove1 = (arr1, monster, char) => {
  if (monster.dir === 1) {
    if (arr1[monster.yPos][monster.xPos - 1] === char || arr1[monster.yPos][monster.xPos] === char) {
      return true;
    }
    return false;
  } else if (monster.dir === 2) {
    if (arr1[monster.yPos][monster.xPos + 1] === char || arr1[monster.yPos][monster.xPos] === char) {
      return true;
    }
    return false;
  } else if (monster.dir === 3) {
    if (arr1[monster.yPos - 1][monster.xPos] === char || arr1[monster.yPos][monster.xPos] === char) {
      return true;
    }
    return false;
  } else if (monster.dir === 4) {
    if ((arr1.length - 1 !== monster.yPos && arr1[monster.yPos + 1][monster.xPos] === char) || arr1[monster.yPos][monster.xPos] === char) {
      return true;
    }
    return false;
  }
};
module.exports = { canMove, canMove1 };
