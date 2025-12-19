function connect4Winner(player, board) {
  const rows = board.length;
  const cols = board[0].length;

  // Richtungen: rechts, unten, diagonal rechts-unten, diagonal rechts-oben
  const directions = [
    [0, 1],   // →
    [1, 0],   // ↓
    [1, 1],   // ↘
    [-1, 1]   // ↗
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      if (board[r][c] !== player) continue;

      for (const [dr, dc] of directions) {
        let count = 1;

        for (let i = 1; i < 4; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;

          if (
            nr < 0 || nr >= rows ||
            nc < 0 || nc >= cols ||
            board[nr][nc] !== player
          ) {
            break;
          }

          count++;
        }

        if (count === 4) {
          return true;
        }
      }
    }
  }

  return false;
}

module.exports = { connect4Winner };
