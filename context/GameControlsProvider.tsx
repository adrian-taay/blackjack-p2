"use client";

import { DealResult } from "@/types";
import React, { createContext, useContext, useState } from "react";

type GameControlContextTypes = {
  showDealWindow: boolean;
  setShowDealWindow: React.Dispatch<React.SetStateAction<boolean>>;
  startGame: boolean;
  pauseGame: boolean;
  dealResult: DealResult;
  showDealResultWindow: boolean;
  setShowDealResultWindow: React.Dispatch<React.SetStateAction<boolean>>;
  handleStartGame: () => void;
  handleRestartGame: () => void;
};

const GameControlContext = createContext({} as GameControlContextTypes);

export default function GameControlsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDealWindow, setShowDealWindow] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [pauseGame, setPauseGame] = useState(false);
  const [dealResult, setDealResult] = useState<DealResult>({} as DealResult);
  const [showDealResultWindow, setShowDealResultWindow] = useState(false);

  function handleStartGame(): void {
    setShowDealWindow(false);
    setStartGame(true);
    setPauseGame(false);
  }

  function handleRestartGame(): void {
    setShowDealResultWindow(false);
    setStartGame(false);
    setDealResult({} as DealResult);
    setShowDealWindow(true);
  }

  const settings: GameControlContextTypes = {
    showDealWindow,
    setShowDealWindow,
    startGame,
    pauseGame,
    dealResult,
    showDealResultWindow,
    setShowDealResultWindow,
    handleStartGame,
    handleRestartGame,
  };

  return (
    <GameControlContext.Provider value={settings}>
      {children}
    </GameControlContext.Provider>
  );
}

export function useGameControls() {
  return useContext(GameControlContext);
}
