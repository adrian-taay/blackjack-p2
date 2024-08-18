import { DrawnCards } from "@/types";
import { populateDealResult } from "./populateDealResult";

export function compareCards(
  playerDrawnCards: DrawnCards,
  dealerDrawnCards: DrawnCards
): void {
  if (dealerDrawnCards.sumOfCards > 21) {
    populateDealResult("win");
  } else if (playerDrawnCards.sumOfCards > dealerDrawnCards.sumOfCards) {
    populateDealResult("win");

    console.log("You Win!");
  } else if (playerDrawnCards.sumOfCards === dealerDrawnCards.sumOfCards) {
    populateDealResult("tie");

    console.log("It's a tie! Deal has been refunded.");
  } else {
    populateDealResult("lose");

    console.log("Dealer Wins!");
  }
}
