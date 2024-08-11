"use client";

import { Card, ContextSettings, DrawnCards } from "@/types";
import { createContext, useEffect, useState } from "react";
import { shuffledDeckOfCards } from "@/context/deckOfCards";

export const BlackjackContext = createContext({} as ContextSettings);

function BlackjackProvider({ children }: { children: React.ReactNode }) {
  const [gameDeck, setGameDeck] = useState<Card[]>(shuffledDeckOfCards);
  const [dealerCards, setDealerCards] = useState([] as Card[]);
  const [playerCards, setPlayerCards] = useState([] as Card[]);
  const [drawnCardCount, setDrawnCardCount] = useState(4);

  useEffect(() => {
    setDealerCards([gameDeck[0], gameDeck[1]]);
    setPlayerCards([gameDeck[2], gameDeck[3]]);
  }, [gameDeck]);

  const dealerDrawnCards: DrawnCards = {
    player: "Dealer",
    numberOfCards: dealerCards.length,
    sumOfCards: dealerCards.reduce((a, b) => a + b.value, 0),
    cards: dealerCards,
  };

  const playerDrawnCards: DrawnCards = {
    player: "You",
    numberOfCards: playerCards.length,
    sumOfCards: playerCards.reduce((a, b) => a + b.value, 0),
    cards: playerCards,
  };

  function drawOneCard(): void {
    setPlayerCards((p) => [...p, gameDeck[drawnCardCount]]);
    setDrawnCardCount((d) => d + 1);
  }

  console.log(gameDeck);

  const settings: ContextSettings = {
    gameDeck,
    setGameDeck,
    dealerCards,
    playerCards,
    dealerDrawnCards,
    playerDrawnCards,
    drawnCardCount,
    drawOneCard,
  };

  return (
    <BlackjackContext.Provider value={settings}>
      {children}
    </BlackjackContext.Provider>
  );
}
export default BlackjackProvider;
