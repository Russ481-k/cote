function getMaxMineral(map) {
  const m = map.length;
  const n = map[0].length;
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  dp[0][0] = Number(map[0][0]);

  console.log(dp)

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + Number(map[i][0]);
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + Number(map[0][j]);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + Number(map[i][j]);
    }
  }

  return dp[m-1][n-1];
}

const map = ["8 3 5", "4 3 4", "2 2 3"];
console.log(getMaxMineral(map)); // 출력값: 23
