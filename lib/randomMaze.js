let length;
let width;
let init = (length1, width1) => {
  length = length1;
  width = width1;
  let arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = new Array(width);
  }
  arr = empty(arr);
  maze(arr, 1, 1);
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      if (arr[i][j] === '▉') {
        let random = Math.random();
        if (random < 0.2) {
          arr[i][j] = ' ';
        }
      }
    }
  }

  return arr;
};

const empty = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      arr[i][j] = '▉';
    }
  }
  return arr;
};

function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const maze = (arr, x, y) => {
  let dir = [1, 2, 3, 4];
  arr[y][x] = ' ';
  dir = shuffleArray(dir);
  for (let i = 0; i < dir.length; i++) {
    switch (dir[i]) {
      case 1: if (y >= 2 && arr[y - 2][x] !== ' ') {
        arr[y - 1][x] = ' ';
        maze(arr, x, y - 2);
      }
        break;
      case 2: if (y < length - 2 && arr[y + 2][x] !== ' ') {
        arr[y + 1][x] = ' ';
        maze(arr, x, y + 2);
      }
        break;
      case 3: if (x > 2 && arr[y][x - 2] !== ' ') {
        arr[y][x - 1] = ' ';
        maze(arr, x - 2, y);
      }
        break;
      case 4: if (x < width - 2 && arr[y][x + 2] !== ' ') {
        arr[y][x + 1] = ' ';
        maze(arr, x + 2, y);
      }
        break;
    }
  }
};

module.exports = { init };
