"use client";

import { BlackjackContext } from "@/context/BlackjackProvider";
import { RectangleVertical } from "lucide-react";
import React, { useContext } from "react";

function Header() {
  const { gameDeck, consequentDrawCardCount } = useContext(BlackjackContext);

  return (
    <div className="relative flex justify-center items-center py-3 text-white">
      <h1
        className="font-extrabold text-xl text-center items-center tracking-widest px-2"
        style={{ textShadow: "2px 2px 10px #353932" }}
      >
        BLΛƆK JΛƆK
      </h1>
      <span className="absolute right-6 flex items-center gap-1">
        {gameDeck && consequentDrawCardCount
          ? gameDeck.length - consequentDrawCardCount
          : 52}
        <RectangleVertical size={18} />
      </span>
    </div>
  );
}

export default Header;
