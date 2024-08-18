export function populateDealResult(result: "win" | "lose" | "tie"): {} {
  // setPauseGame(true);

  let resultType = "";
  let multiplier = 0;

  switch (result) {
    case "win":
      resultType = "You Win!";
      multiplier = 1;
      break;
    case "lose":
      resultType = "Dealer Wins!";
      multiplier = -1;
      break;
    default:
      resultType = "It's a tie! Bet has been refunded.";
      multiplier = 0;
      break;
  }

  return {
    result: resultType,
    earnings: playerBet * multiplier,
    newBalance: playerBank + playerBet * multiplier,
  };

  // setTotalGames((g) => g + 1);
  // setDealResult({
  //   result: resultType,
  //   earnings: playerBet * multiplier,
  //   newBalance: playerBank + playerBet * multiplier,
  // });
}
