const randomDir = (monster, koefficient) => {
  let koef = Math.random(); // <0.2 fordul jobbra, <0,4 fordul balra,<0.5 fordul hatra
  if (monster.dir === 1) {
    if (koef < koefficient.turnRight) {
      monster.dir = 3;
    } else if (koef < koefficient.turnLeft) {
      monster.dir = 4;
    } else if (koef < koefficient.turnBehind) {
      monster.dir = 3;
    }
  } else if (monster.dir === 2) {
    if (koef < koefficient.turnRight) {
      monster.dir = 4;
    } else if (koef < koefficient.turnLeft) {
      monster.dir = 3;
    } else if (koef < koefficient.turnBehind) {
      monster.dir = 1;
    }
  } else if (monster.dir === 3) {
    if (koef < koefficient.turnRight) {
      monster.dir = 2;
    } else if (koef < koefficient.turnLeft) {
      monster.dir = 1;
    } else if (koef < koefficient.turnBehind) {
      monster.dir = 4;
    }
  } else if (monster.dir === 4) {
    if (koef < koefficient.turnRight) {
      monster.dir = 1;
    } else if (koef < koefficient.turnLeft) {
      monster.dir = 2;
    } else if (koef < koefficient.turnBehind) {
      monster.dir = 3;
    }
  }
  return monster;
};
module.exports = { randomDir };
