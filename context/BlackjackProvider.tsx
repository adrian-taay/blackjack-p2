"use client";

import { Card, ContextSettings, DealResult, DrawnCards } from "@/types";
import { createContext, useEffect, useState } from "react";
import {
  deckOfCards,
  handleShuffleDeck,
  shuffledDeckOfCards,
} from "@/utils/DeckOfCards";
import { usePlayerStats } from "./PlayerStatsProvider";
import { addOneCard } from "@/utils/addOneCard";

export const BlackjackContext = createContext({} as ContextSettings);

const initialState: DrawnCards = {
  numberOfCards: 0,
  sumOfCards: 0,
  cards: [],
};

function BlackjackProvider({ children }: { children: React.ReactNode }) {
  const {
    playerBank,
    setPlayerBank,
    playerBet,
    setPlayerBet,
    totalGames,
    setTotalGames,
  } = usePlayerStats();

  const [showDealWindow, setShowDealWindow] = useState(false);
  const [showDealResult, setShowDealResult] = useState(false);
  const [gameDeck, setGameDeck] = useState<Card[]>(shuffledDeckOfCards);
  const [startGame, setStartGame] = useState(false);
  const [pauseGame, setPauseGame] = useState(false);
  const [showHiddenDealerCard, setShowHiddenDealerCard] = useState(false);
  const [drawCardCount, setDrawCardCount] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [finishPlayerTurn, setFinishPlayerTurn] = useState(false);
  const [autoDraw, setAutoDraw] = useState(false);
  const [dealResult, setDealResult] = useState<DealResult>({} as DealResult);

  const [playerDrawnCards, setPlayerDrawnCards] =
    useState<DrawnCards>(initialState);
  const [dealerDrawnCards, setDealerDrawnCards] =
    useState<DrawnCards>(initialState);

  const handleStartGame = (): void => {
    setShowDealWindow(false);
    setStartGame(true);
    setPauseGame(false);
    setAutoDraw(true);
  };

  const handleStand = (): void => {
    setFinishPlayerTurn(true);
    setPlayerTurn(false);
    setShowHiddenDealerCard(true);
    setAutoDraw(true);
  };

  const handleRestartGame = (): void => {
    setPlayerBank((pb) => pb + dealResult.earnings);
    setPlayerBet(0);
    setGameDeck(handleShuffleDeck(deckOfCards));
    setDrawCardCount(0);

    setShowDealResult(false);
    setStartGame(false);

    setShowHiddenDealerCard(false);
    setPlayerTurn(false);
    setFinishPlayerTurn(false);
    setAutoDraw(false);
    setDealResult({} as DealResult);
    setPlayerDrawnCards(initialState);
    setDealerDrawnCards(initialState);

    setShowDealWindow(true);
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

    if (drawCardCount > 4 && dealerDrawnCards.sumOfCards >= 17) {
      compareCards();
      return setAutoDraw(false);
    }

    function drawCard() {
      const newCard = gameDeck[drawCardCount];

      if (playerTurn) {
        addOneCard("You", setPlayerDrawnCards, newCard);
      } else {
        addOneCard("Dealer", setDealerDrawnCards, newCard);
      }

      setDrawCardCount((cc) => cc + 1);
    }

    if (finishPlayerTurn && dealerDrawnCards.sumOfCards > 21) {
      populateDealResult("win");
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

  useEffect(() => {
    if (playerDrawnCards.sumOfCards > 21) {
      setShowHiddenDealerCard(true);
      populateDealResult("lose");
    }
  }, [playerDrawnCards]);

  function compareCards(): void {
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

  function populateDealResult(result: "win" | "lose" | "tie"): void {
    setPauseGame(true);

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

    setTotalGames((g) => g + 1);
    setDealResult({
      result: resultType,
      earnings: playerBet * multiplier,
      newBalance: playerBank + playerBet * multiplier,
    });
  }

  useEffect(() => {
    if (!pauseGame) return;
    const timer = setTimeout(() => setShowDealResult(true), 1000);

    return () => clearTimeout(timer);
  }, [pauseGame]);

  const settings: ContextSettings = {
    playerBank,
    playerBet,
    setPlayerBet,
    totalGames,
    setTotalGames,
    showDealWindow,
    setShowDealWindow,
    showDealResult,
    setShowDealResult,
    gameDeck,
    setGameDeck,
    startGame,
    pauseGame,
    handleStartGame,
    handleStand,
    handleRestartGame,
    showHiddenDealerCard,
    dealerDrawnCards,
    playerDrawnCards,
    drawCardCount,
    setPlayerDrawnCards,
    dealResult,
    autoDraw,
  };

  return (
    <BlackjackContext.Provider value={settings}>
      {children}
    </BlackjackContext.Provider>
  );
}
export default BlackjackProvider;
