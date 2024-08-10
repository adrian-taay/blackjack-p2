import React from "react";
import Button from "./Button";
import { Btn } from "@/types";
import { CirclePlus, Handshake, ThumbsUp } from "lucide-react";

function PlayerControls() {
  const BetAmount = (
    <div className="flex flex-col items-center bg-white/20 px-6 py-2 rounded-lg text-white">
      <span className="text-sm">Bet</span>
      <span className="font-semibold">Php 1,000</span>
    </div>
  );

  const HitBtn: Btn = {
    btnIcon: <CirclePlus />,
    btnName: "Hit",
    color: "bg-yellow-500",
    action: "",
  };

  const StandBtn: Btn = {
    btnIcon: <ThumbsUp />,
    btnName: "Stand",
    color: "bg-yellow-500",
    action: "",
  };

  const DealBtn: Btn = {
    btnIcon: <Handshake />,
    btnName: "Deal",
    color: "bg-neutral-700",
    action: "",
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
    </div>
  );
}

export default PlayerControls;
