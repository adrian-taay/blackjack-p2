"use client";

import CardWrapper from "./CardWrapper";
import { DrawnCards } from "@/types";
import clsx from "clsx";

function DrawnCardsWrapper({ drawnCards }: { drawnCards: DrawnCards }) {
  const { player, numberOfCards, sumOfCards, cards } = drawnCards;

  const CardSum = (
    <div className="flex gap-2 items-center text-white">
      <span>{player}:</span>
      <span>{player === "You" ? sumOfCards : cards[1]?.value}</span>
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
    <section
      className={clsx(
        "w-full",
        "flex",
        "flex-col",
        "gap-4",
        "items-center",
        player === "Dealer" && "flex-col-reverse"
      )}
    >
      {DrawDeck}
      {CardSum}
    </section>
  );
}

export default DrawnCardsWrapper;
