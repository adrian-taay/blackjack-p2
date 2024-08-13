"use client";

import { Card, ContextSettings, DrawnCards } from "@/types";
import { createContext, useEffect, useState } from "react";
import { shuffledDeckOfCards } from "@/context/deckOfCards";
import { HeartIcon } from "lucide-react";

export const BlackjackContext = createContext({} as ContextSettings);

const temporaryDeck: Card[] = [
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "3",
    value: 3,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "3",
    value: 3,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "3",
    value: 3,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "A",
    value: 11,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "J",
    value: 10,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
  {
    suit: "Heart",
    icon: <HeartIcon />,
    displayIcon: <HeartIcon />,
    name: "2",
    value: 2,
  },
];

function BlackjackProvider({ children }: { children: React.ReactNode }) {
  const [gameDeck, setGameDeck] = useState<Card[]>(
    temporaryDeck ? temporaryDeck : shuffledDeckOfCards
  );
  const [startGame, setStartGame] = useState(false);
  const [initialDrawCardCount, setInitialDrawCardCount] = useState(0);
  const [consequentDrawCardCount, setConsequentDrawCardCount] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [finishDeal, setFinishDeal] = useState(false);

  const [playerDrawnCards, setPlayerDrawnCards] = useState<DrawnCards>({
    player: "You",
    numberOfCards: 0,
    sumOfCards: 0,
    cards: [],
  });
  const [dealerDrawnCards, setDealerDrawnCards] = useState<DrawnCards>({
    player: "Dealer",
    numberOfCards: 0,
    sumOfCards: 0,
    cards: [],
  });

  useEffect(() => {
    if (!startGame) return;
    if (initialDrawCardCount == 2) setPlayerTurn(true);
    if (initialDrawCardCount == 4) return console.log("Initial draw complete");

    function initialDraw() {
      const newCard = gameDeck[initialDrawCardCount];

      if (playerTurn) {
        setPlayerDrawnCards((p) => ({
          ...p,
          numberOfCards: p.numberOfCards + 1,
          sumOfCards: p.sumOfCards + newCard.value,
          cards: [...p.cards, newCard],
        }));
      } else {
        setDealerDrawnCards((d) => ({
          ...d,
          numberOfCards: d.numberOfCards + 1,
          sumOfCards: d.sumOfCards + newCard.value,
          cards: [...d.cards, newCard],
        }));
      }

      setInitialDrawCardCount((c) => c + 1);
      setConsequentDrawCardCount((c) => c + 1);
    }

    const delay = 750;
    const timer = setTimeout(initialDraw, delay);

    return () => clearTimeout(timer);
  }, [gameDeck, startGame, initialDrawCardCount, playerTurn]);

  function playerDrawsOneCard(): void {
    const newCard = gameDeck[consequentDrawCardCount];

    setPlayerDrawnCards((p) => {
      let updatedCards = [...p.cards, newCard];
      let updatedSum = p.sumOfCards + newCard.value;

      if (p.sumOfCards + newCard.value > 21) {
        updatedCards = updatedCards.map((card) =>
          card.name === "A" && card.value === 11 ? { ...card, value: 1 } : card
        );

        updatedSum = updatedCards.reduce((a, b) => a + b.value, 0);
      }

      return {
        ...p,
        numberOfCards: p.numberOfCards + 1,
        sumOfCards: updatedSum,
        cards: updatedCards,
      };
    });

    setConsequentDrawCardCount((c) => c + 1);
  }

  function dealerDrawsOneCard(): void {
    const newCard = gameDeck[consequentDrawCardCount];

    setDealerDrawnCards((d) => {
      let updatedCards = [...d.cards, newCard];
      let updatedSum = d.sumOfCards + newCard.value;

      if (d.sumOfCards + newCard.value > 17) {
        updatedCards = updatedCards.map((card) =>
          card.name === "A" && card.value === 11 ? { ...card, value: 1 } : card
        );

        updatedSum = updatedCards.reduce((a, b) => a + b.value, 0);
      }

      return {
        ...d,
        numberOfCards: d.numberOfCards + 1,
        sumOfCards: updatedSum,
        cards: updatedCards,
      };
    });

    setConsequentDrawCardCount((c) => c + 1);
  }

  const settings: ContextSettings = {
    gameDeck,
    setGameDeck,
    setStartGame,
    dealerDrawnCards,
    playerDrawnCards,
    consequentDrawCardCount,
    playerDrawsOneCard,
  };

  return (
    <BlackjackContext.Provider value={settings}>
      {children}
    </BlackjackContext.Provider>
  );
}
export default BlackjackProvider;
