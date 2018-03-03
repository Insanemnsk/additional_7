module.exports = function solveSudoku(matrix) {
  let value = 10;
  return matrix.map(row => row.map(element => element || value++));
} 
