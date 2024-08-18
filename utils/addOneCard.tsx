import { Card, DrawnCards } from "@/types";

export function addOneCard(
  player: "You" | "Dealer",
  cb: React.Dispatch<React.SetStateAction<DrawnCards>>,
  card: Card
): void {
  cb((prev) => {
    let updatedCards = [...prev.cards, card];
    let updatedSum = prev.sumOfCards + card.value;

    if (prev.sumOfCards + card.value > 21) {
      updatedCards = updatedCards.map((card) =>
        card.name === "A" && card.value === 11 ? { ...card, value: 1 } : card
      );

      updatedSum = updatedCards.reduce((a, b) => a + b.value, 0);
    }

    return {
      player: player,
      numberOfCards: prev.numberOfCards + 1,
      sumOfCards: updatedSum,
      cards: updatedCards,
    };
  });
}
