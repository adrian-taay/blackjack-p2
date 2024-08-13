"use client";

import { useContext } from "react";
import Button from "./Button";
import { Btn } from "@/types";
import { CirclePlus, Handshake, ThumbsUp } from "lucide-react";
import { BlackjackContext } from "@/context/BlackjackProvider";

function PlayerControls() {
  const { playerBet, handleStartGame, handleStand, playerDrawsOneCard } =
    useContext(BlackjackContext);

  const BetAmount = (
    <div className="flex flex-col items-center bg-white/20 px-6 py-2 rounded-lg text-white">
      <span className="text-sm">Bet</span>
      <span className="font-semibold">Php {playerBet}</span>
    </div>
  );

  const HitBtn: Btn = {
    btnIcon: <CirclePlus />,
    btnName: "Hit",
    color: "bg-yellow-500",
    action: playerDrawsOneCard,
  };

  const StandBtn: Btn = {
    btnIcon: <ThumbsUp />,
    btnName: "Stand",
    color: "bg-yellow-500",
    action: handleStand,
  };

  const DealBtn: Btn = {
    btnIcon: <Handshake />,
    btnName: "Deal",
    color: "bg-neutral-700",
    // action: "",
  };

  return (
    <div className="flex flex-col items-center gap-6 my-10">
      <div className="flex justify-center items-center gap-8">
        <span className="w-16 lg:w-32 grow-0 shrink-0 text-center">
          <Button settings={HitBtn} />
        </span>
        {BetAmount}
        <span className="w-16 lg:w-32 grow-0 shrink-0 text-center">
          <Button settings={StandBtn} />
        </span>
      </div>
      <button onClick={handleStartGame}>Start</button>
    </div>
  );
}

export default PlayerControls;
