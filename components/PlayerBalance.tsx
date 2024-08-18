"use client";

import { usePlayerStats } from "@/context/PlayerStatsProvider";

function PlayerBalance() {
  const { playerBank, playerBet } = usePlayerStats();

  return (
    <div className="flex justify-center">
      <span className="flex gap-1 items-center text-center text-white bg-neutral-800 px-8 py-3 rounded-t-lg">
        <span className="font-bold">Balance: Php {playerBank}</span>
        <span className="italic font-thin text-xs">
          {playerBet ? `\(Php ${playerBet}\)` : null}
        </span>
      </span>
    </div>
  );
}

export default PlayerBalance;
