"use client";

import { Btn } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const StartBtn: Btn = {
    btnIcon: <ChevronRight />,
    btnName: "Start Game",
    color: "bg-yellow-500",
    action: "",
  };

  const MainTitle = (
    <h1 className="font-extrabold text-3xl lg:text-6xl text-center items-center tracking-widest border-4 lg:border-8 border-white text-white px-4 py-2">
      BLΛƆK JΛƆK
    </h1>
  );

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#6ea44f] via-[#5b8b46] to-[#1e4d07] gap-10 lg:gap-20">
      {MainTitle}
      <Link
        href={"/game"}
        className="flex items-center bg-yellow-500 hover:bg-yellow-400 px-8 py-2 border border-white rounded-lg font-bold text-white shadow-lg"
      >
        <span>Start Game</span>
        <span>
          <ChevronRight />
        </span>
      </Link>
    </main>
  );
}
