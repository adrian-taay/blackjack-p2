"use client";

import React, { createContext, useContext, useState } from "react";

type PlayerStatsContextTypes = {
  playerBank: number;
  setPlayerBank: React.Dispatch<React.SetStateAction<number>>;
  playerBet: number;
  setPlayerBet: React.Dispatch<React.SetStateAction<number>>;
  totalGames: number;
  setTotalGames: React.Dispatch<React.SetStateAction<number>>;
  addToBet: (chipValue: number) => void;
  clearBet: () => void;
};

const PlayerStatsContext = createContext({} as PlayerStatsContextTypes);

export default function PlayerStatsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playerBank, setPlayerBank] = useState(5000);
  const [playerBet, setPlayerBet] = useState(0);
  const [totalGames, setTotalGames] = useState(0);

  const addToBet = (chipValue: number): void => {
    if (playerBet + chipValue > playerBank) {
      return;
    }

    setPlayerBet((b) => b + chipValue);
  };

  const clearBet = (): void => {
    setPlayerBet(0);
  };

  const settings = {
    playerBank,
    setPlayerBank,
    playerBet,
    setPlayerBet,
    totalGames,
    setTotalGames,
    addToBet,
    clearBet,
  };

  return (
    <PlayerStatsContext.Provider value={settings}>
      {children}
    </PlayerStatsContext.Provider>
  );
}

export function usePlayerStats() {
  return useContext(PlayerStatsContext);
}
