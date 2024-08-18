"use client";

import { Card, BlackjackLogicContextTypes, DrawnCards } from "@/types";
import { createContext, useEffect, useMemo, useState } from "react";
import {
  deckOfCards,
  handleShuffleDeck,
  shuffledDeckOfCards,
} from "@/utils/DeckOfCards";
import { addOneCard } from "@/utils/addOneCard";
import { useGameControls } from "./GameControlsProvider";
import { compareCards } from "@/utils/compareCards";

export const BlackjackContext = createContext({} as BlackjackLogicContextTypes);

const initialState: DrawnCards = {
  numberOfCards: 0,
  sumOfCards: 0,
  cards: [],
};

// ***************************************************

// const shuffledDeckOfCards = useMemo(() => {
//   if (drawCardCount !== 0) {
//     return;
//   }
//   handleShuffleDeck(deckOfCards);
// }, [drawCardCount]);

// ***************************************************

function BlackjackProvider({ children }: { children: React.ReactNode }) {
  const { startGame, autoDraw, setAutoDraw, populateDealResult } =
    useGameControls();

  const [gameDeck, setGameDeck] = useState<Card[]>(shuffledDeckOfCards);
  const [drawCardCount, setDrawCardCount] = useState(0);
  const [showHiddenDealerCard, setShowHiddenDealerCard] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [finishPlayerTurn, setFinishPlayerTurn] = useState(false);
  const [playerDrawnCards, setPlayerDrawnCards] =
    useState<DrawnCards>(initialState);
  const [dealerDrawnCards, setDealerDrawnCards] =
    useState<DrawnCards>(initialState);

  const handleHit = (): void => {
    addOneCard("You", setPlayerDrawnCards, gameDeck[drawCardCount]);
    setDrawCardCount((c) => c + 1);
  };

  const handleFinishTurn = (): void => {
    setFinishPlayerTurn(true);
    setPlayerTurn(false);
    setShowHiddenDealerCard(true);
    setAutoDraw(true);
  };

  useEffect(() => {
    if (!startGame) return;
    if (!autoDraw) return;

    drawInitialFourCards();

    function drawOneCard() {
      const newCard = gameDeck[drawCardCount];

      if (playerTurn) {
        addOneCard("You", setPlayerDrawnCards, newCard);
      } else {
        addOneCard("Dealer", setDealerDrawnCards, newCard);
      }

      setDrawCardCount((cc) => cc + 1);
    }

    const delay = 750;
    const timer = setTimeout(drawOneCard, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startGame, drawCardCount, playerTurn, autoDraw]);

  useEffect(() => {
    function checkPlayerCards() {
      if (playerDrawnCards.sumOfCards > 21) {
        setShowHiddenDealerCard(true);
        populateDealResult("lose");
      }
    }
    checkPlayerCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerDrawnCards]);

  useEffect(() => {
    function checkDealerCards() {
      if (finishPlayerTurn && dealerDrawnCards.sumOfCards >= 17) {
        setAutoDraw(false);

        return compareCards(
          finishPlayerTurn,
          playerDrawnCards,
          dealerDrawnCards,
          populateDealResult
        );
      }
    }
    checkDealerCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealerDrawnCards]);

  function drawInitialFourCards(): void {
    if (!finishPlayerTurn) {
      if (drawCardCount >= 2) setPlayerTurn(true);
      if (drawCardCount >= 4) {
        setAutoDraw(false);
        checkInitialBlackjack();
        return console.log("Initial draw complete");
      }
    }
  }

  function checkInitialBlackjack(): void {
    const playerBlackjack = playerDrawnCards.sumOfCards === 21;

    if (playerBlackjack) {
      if (dealerDrawnCards.sumOfCards === 21) {
        setShowHiddenDealerCard(true);
        populateDealResult("tie");

        return console.log("It's a tie! Bet has been refunded.");
      }

      setShowHiddenDealerCard(true);
      populateDealResult("win");

      return console.log("You win!");
    }
  }

  const settings: BlackjackLogicContextTypes = {
    gameDeck,
    setGameDeck,
    drawCardCount,
    setPlayerDrawnCards,
    showHiddenDealerCard,
    playerDrawnCards,
    dealerDrawnCards,
    handleHit,
    handleFinishTurn,
  };

  return (
    <BlackjackContext.Provider value={settings}>
      {children}
    </BlackjackContext.Provider>
  );
}
export default BlackjackProvider;
