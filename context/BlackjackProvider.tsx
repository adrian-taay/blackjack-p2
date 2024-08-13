"use client";

import { Card, ContextSettings, DrawnCards } from "@/types";
import { createContext, useEffect, useState } from "react";
import { shuffledDeckOfCards } from "@/context/deckOfCards";
import { HeartIcon } from "lucide-react";

export const BlackjackContext = createContext({} as ContextSettings);

// const temporaryDeck: Card[] = [
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "3",
//     value: 3,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "3",
//     value: 3,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "3",
//     value: 3,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "A",
//     value: 11,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "J",
//     value: 10,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
//   {
//     suit: "Heart",
//     icon: <HeartIcon />,
//     displayIcon: <HeartIcon />,
//     name: "2",
//     value: 2,
//   },
// ];

function BlackjackProvider({ children }: { children: React.ReactNode }) {
  const [playerBank, setPlayerBank] = useState(5000);
  const [playerBet, setPlayerBet] = useState(0);
  const [gameDeck, setGameDeck] = useState<Card[]>(shuffledDeckOfCards);
  const [startGame, setStartGame] = useState(false);
  const [showHiddenDealerCard, setShowHiddenDealerCard] = useState(false);
  const [drawCardCount, setDrawCardCount] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [finishPlayerTurn, setFinishPlayerTurn] = useState(false);
  const [autoDraw, setAutoDraw] = useState(false);

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

  const handleStartGame = (): void => {
    setStartGame(true);
    setAutoDraw(true);
  };

  const handleStand = (): void => {
    setFinishPlayerTurn(true);
    setPlayerTurn(false);
    setShowHiddenDealerCard(true);
    setAutoDraw(true);
  };

  useEffect(() => {
    if (!startGame) return;

    if (!finishPlayerTurn) {
      if (drawCardCount >= 2) setPlayerTurn(true);
      if (drawCardCount >= 4) {
        setAutoDraw(false);
        checkInitialBlackjack();
        return console.log("Initial draw complete");
      }
    }

    if (dealerDrawnCards.sumOfCards >= 17) {
      compareCards();
      return setAutoDraw(false);
    }

    function drawCard() {
      if (playerTurn) {
        playerDrawsOneCard();
      } else {
        dealerDrawsOneCard();
      }
    }

    const delay = 750;
    const timer = setTimeout(drawCard, delay);

    return () => clearTimeout(timer);
  }, [
    gameDeck,
    startGame,
    drawCardCount,
    playerTurn,
    autoDraw,
    finishPlayerTurn,
  ]);

  function playerDrawsOneCard(): void {
    const newCard = gameDeck[drawCardCount];

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

    setDrawCardCount((c) => c + 1);
  }

  function dealerDrawsOneCard(): void {
    const newCard = gameDeck[drawCardCount];

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

    setDrawCardCount((c) => c + 1);
  }

  function compareCards(): void {
    if (playerDrawnCards.sumOfCards > dealerDrawnCards.sumOfCards) {
      setPlayerBank((pb) => pb + playerBet);
      setPlayerBet(0);
      console.log("You Win!");
    } else if (playerDrawnCards.sumOfCards === dealerDrawnCards.sumOfCards) {
      setPlayerBet(0);
      console.log("It's a tie! Deal has been refunded.");
    } else {
      setPlayerBank((pb) => pb - playerBet);
      setPlayerBet(0);
      console.log("Dealer Wins!");
    }
  }

  function checkInitialBlackjack(): void {
    const playerBlackjack = playerDrawnCards.sumOfCards === 21;

    if (playerBlackjack) {
      if (dealerDrawnCards.sumOfCards === 21) {
        setPlayerBet(0);
        return console.log("It's a tie! Bet has been refunded.");
      }

      setPlayerBank((pb) => pb + playerBet);
      setPlayerBet(0);
      return console.log("You win!");
    }
  }

  const settings: ContextSettings = {
    playerBank,
    playerBet,
    setPlayerBet,
    gameDeck,
    setGameDeck,
    handleStartGame,
    handleStand,
    showHiddenDealerCard,
    dealerDrawnCards,
    playerDrawnCards,
    drawCardCount,
    playerDrawsOneCard,
  };

  return (
    <BlackjackContext.Provider value={settings}>
      {children}
    </BlackjackContext.Provider>
  );
}
export default BlackjackProvider;
