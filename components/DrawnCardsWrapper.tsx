import React from "react";
import CardWrapper from "./CardWrapper";
import { DrawnCards } from "@/types";

function DrawnCardsWrapper({ drawnCards }: { drawnCards: DrawnCards }) {
  const { player, numberOfCards, sumOfCards, cards } = drawnCards;

  const CardSum = (
    <div className="flex gap-2 items-center text-white">
      <span>{player}:</span>
      <span>{sumOfCards}</span>
    </div>
  );

  const DrawDeck = (
    <div className="flex">
      {cards.map((card, index) => {
        const hiddenDealerCard = player === "Dealer" && index === 0;
        const angle =
          (index - (numberOfCards - 1) / 2) * (player === "You" ? 5 : -5);

        return (
          <div
            key={index}
            style={{
              zIndex: index,
              transform: `rotate(${angle}deg)`,
              transformOrigin:
                player === "You" ? "bottom center" : "top center",
            }}
          >
            <CardWrapper details={hiddenDealerCard ? null : card} />
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="w-full flex flex-col gap-4 items-center">
      {DrawDeck}
      {CardSum}
    </section>
  );
}

export default DrawnCardsWrapper;
