"use client";

import { usePlayerStats } from "@/context/PlayerStatsProvider";
import { redirect } from "next/navigation";
import React, { useLayoutEffect } from "react";

function FinalScorePage() {
  const { playerBank, totalGames } = usePlayerStats();
  const cashWon = playerBank - 5000;

  useLayoutEffect(() => {
    if (totalGames < 1) {
      redirect("/");
    }
  }, [totalGames]);

  const FinalResults = {
    cash_won: `Php ${cashWon}`,
    total_games: totalGames,
    final_balance: `Php ${playerBank}`,
    final_outcome: cashWon >= 0 ? "You Win!" : "House Wins!",
  };

  const displayFinalResults = Object.entries(FinalResults).map(
    ([key, value]) => (
      <div key={key} className="flex justify-between items-center my-1">
        <span className="capitalize">{key.split("_").join(" ")}</span>
        <span>{value}</span>
      </div>
    )
  );

  const finalResultsWrapper = (
    <section className="w-full max-w-80 bg-white p-8 min-[321px]:rounded-lg shadow-lg">
      <div className="text-center text-xl font-bold mb-4">
        {FinalResults.final_outcome}
      </div>
      {displayFinalResults}
      <span
        className="w-48 mt-8 mx-auto flex justify-center items-center bg-yellow-500 hover:bg-yellow-400 px-8 py-2 border border-white rounded-lg font-bold text-white shadow-lg cursor-pointer"
        onClick={() => window.location.reload()}
      >
        Quit
      </span>
    </section>
  );

  const gameRestartingWrapper = (
    <section className="w-full text-center max-w-80 bg-white p-8 min-[321px]:rounded-lg shadow-lg">
      Game restarting...
    </section>
  );

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#6ea44f] via-[#5b8b46] to-[#1e4d07]">
      {totalGames > 0 ? finalResultsWrapper : gameRestartingWrapper}
    </main>
  );
}

export default FinalScorePage;
