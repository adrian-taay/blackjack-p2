"use client";

import { useContext, useEffect } from "react";
import { BlackjackContext } from "@/context/BlackjackProvider";
import Header from "@/components/Header";
import DrawnCardsWrapper from "@/components/DrawnCardsWrapper";
import PlayerControls from "@/components/PlayerControls";
import PlayerBalance from "@/components/PlayerBalance";
import DealWindow from "@/components/modals/DealWindow";
import DealResult from "@/components/modals/DealResult";

export default function GamePage() {
  const { dealerDrawnCards, playerDrawnCards, setShowDealWindow, startGame } =
    useContext(BlackjackContext);

  useEffect(() => {
    if (startGame) return;

    setShowDealWindow(true);
  }, [startGame, setShowDealWindow]);

  return (
    <main className="h-screen flex flex-col justify-between bg-gradient-to-b from-[#6ea44f] via-[#5b8b46] to-[#1e4d07]">
      <Header />
      <DrawnCardsWrapper drawnCards={dealerDrawnCards} />
      <PlayerControls />
      <DrawnCardsWrapper drawnCards={playerDrawnCards} />
      <DealWindow />
      <DealResult />
      <PlayerBalance />
    </main>
  );
}
