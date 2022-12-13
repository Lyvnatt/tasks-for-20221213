function safeField(mineField) {
  for (let y = 0; y < mineField.length; y++) {
    for (let x = 0; x < mineField[0].length; x++) {
      if (mineField[y][x] === 'M') {
        // up
        for (let i = y - 1; i >= 0 && (mineField[i][x] === '.' || mineField[i][x] === 'C'); i--) mineField[i][x] = 'C';
        // down
        for (let i = y + 1; i < mineField.length && (mineField[i][x] === '.' || mineField[i][x] === 'C'); i++) mineField[i][x] = 'C'; 
        // left
        for (let i = x - 1; i >= 0 && (mineField[y][i] === '.' || mineField[y][i] === 'C'); i--) mineField[y][i] = 'C';
        // right
        for (let i = x + 1; i < mineField[0].length && (mineField[y][i] === '.' || mineField[y][i] === 'C'); i++) mineField[y][i] = 'C';
      }
    }
  }
  
  const result = [];
  for (let y = 0; y < mineField.length; y++) {
    for (let x = 0; x < mineField[0].length; x++) {
      if (mineField[y][x] === '.') result.push([y, x]);
    }
  }
  return result;
}


let field1 = [
  ['.', '.', '.', '.', 'M'], 
  ['.', 'M', '.', 'T', '.'],
  ['.', '.', 'T', '.', '.'],
  ['.', '.', 'M', '.', 'T'],
  ['.', '.', '.', '.', '.'] 
]

console.log(safeField(field1));