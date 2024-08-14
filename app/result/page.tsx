"use client";

import { BlackjackContext } from "@/context/BlackjackProvider";
import Link from "next/link";
import React, { useContext } from "react";

function FinalScorePage() {
  const { playerBank, totalGames } = useContext(BlackjackContext);
  const cashWon = playerBank - 5000;

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

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#6ea44f] via-[#5b8b46] to-[#1e4d07]">
      <section className="w-1/4 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center text-xl font-bold mb-4">
          {FinalResults.final_outcome}
        </div>
        {displayFinalResults}
        <Link
          href={"/"}
          className="w-48 mt-8 mx-auto flex justify-center items-center bg-yellow-500 hover:bg-yellow-400 px-8 py-2 border border-white rounded-lg font-bold text-white shadow-lg"
        >
          Quit
        </Link>
      </section>
    </main>
  );
}

export default FinalScorePage;
