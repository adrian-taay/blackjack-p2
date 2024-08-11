"use client";

import { Chip } from "@/types";
import clsx from "clsx";
import { Undo2 } from "lucide-react";

function PlayerFunds() {
  const chips: Chip[] = [
    {
      value: 1,
      color: "bg-gray-500",
    },
    {
      value: 5,
      color: "bg-green-500",
    },
    {
      value: 10,
      color: "bg-amber-700",
    },
    {
      value: 20,
      color: "bg-orange-500",
    },
    {
      value: 50,
      color: "bg-red-500",
    },
    {
      value: 100,
      color: "bg-purple-500",
    },
    {
      value: 500,
      color: "bg-yellow-500",
    },
    {
      value: 1000,
      color: "bg-blue-500",
    },
  ];

  const ChipsDisplay = (
    <span className="grid grid-cols-4 gap-4">
      {chips.map((chip, index) => (
        <span
          key={index}
          className={clsx(
            "p-3",
            "rounded-full",
            chip.color,
            "border",
            "border-white",
            "font-bold",
            "grow-0",
            "shrink-0",
            "h-16",
            "w-16",
            "place-content-center",
            "text-center",
            "text-white",
            "shadow-lg",
            "cursor-pointer"
          )}
        >
          {chip.value}
        </span>
      ))}
    </span>
  );

  const playerBet = (
    <span className="flex flex-col items-center gap-2 text-neutral-800">
      <span>Your Bet</span>
      <span className="w-48 border rounded-lg py-2 px-2 font-bold flex items-center justify-between">
        <Undo2 size={18} className="cursor-pointer" />
        <span className="flex-1 text-center">Php 1,000</span>
      </span>
    </span>
  );

  return (
    <span className="flex flex-col items-center gap-6 my-4">
      {ChipsDisplay}
      {playerBet}
    </span>
  );
}

export default PlayerFunds;
