
/*
Write a function that accepts an integer N and returns an N * N spiral matrix.

Examples
matrix(2) ➞ [
  [1, 2],
  [4, 3]
]

matrix(3) ➞ [
  [1, 2, 3],
  [8  ,9, 4],
  [7, 6, 5]
]

matrix(4) ➞ [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
]

Notes
In the examples, traverse the matrix in the clock-wise direction to observe the pattern (spiral).
*/

// N x N spiral array
function matrix(N) {
    let arr = [...Array(N)].map(_ => [...Array(N)]);
    let [i, x, y, d] = [1, -1, 0, 0];
    while (i <= N * N) {
      const [dx, dy] = [[1, 0], [0, 1], [-1, 0], [0, -1]][d % 4];
      const [x_, y_] = [x + dx, y + dy];
      if (0 <= x_ && x_ < N && 0 <= y_ && y_ < N && !arr[y_][x_]) {
        arr[y_][x_] = i;
        [x, y] = [x_, y_];
        i++;
      } else {
        d++;
      }
    }
    return arr;
  }

  