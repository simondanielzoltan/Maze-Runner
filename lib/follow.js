const doYCM = (arr, monsters) => {
  let xcord = 0;
  let ycord = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '$') {
        xcord = j;
        ycord = i;
      }
    }
  }
  let playerRow = [];

  for (let j = 0; j < arr.length; j++) {
    playerRow.push(arr[j][xcord]);
  }

  for (let i = 0; i < monsters.length; i++) {
    if (!monsters[i].isDead) {
      if (monsters[i].yPos === ycord) {
        let index1 = arr[monsters[i].yPos].indexOf('$', monsters[i].xPos);
        let index2 = arr[monsters[i].yPos].indexOf('▉', monsters[i].xPos);
        if (index1 < index2) {
          monsters[i].dir = 2;
        }
        index1 = arr[monsters[i].yPos].lastIndexOf('$', monsters[i].xPos);
        index2 = arr[monsters[i].yPos].lastIndexOf('▉', monsters[i].xPos);
        if (index2 < index1) {
          monsters[i].dir = 1;
        }
      }
      if (monsters[i].xPos === xcord) {
        let index1 = playerRow.indexOf('$', monsters[i].yPos);
        let index2 = playerRow.indexOf('▉', monsters[i].yPos);
        if (index1 < index2 && index1 !== -1) {
          monsters[i].dir = 4;
        }
        index1 = playerRow.lastIndexOf('$', monsters[i].yPos);
        index2 = playerRow.lastIndexOf('▉', monsters[i].yPos);
        if (index2 < index1 && index1 !== -1) {
          monsters[i].dir = 3;
        }
      }
    }
  }
  return monsters;
};
module.exports = { doYCM };
