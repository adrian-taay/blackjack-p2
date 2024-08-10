import { RectangleVertical } from "lucide-react";
import React from "react";

function Header() {
  return (
    <section className="relative flex justify-center items-center py-3 text-white">
      <h1
        className="font-extrabold text-xl text-center items-center tracking-widest px-2"
        style={{ textShadow: "2px 2px 10px #353932" }}
      >
        BLΛƆK JΛƆK
      </h1>
      <span className="absolute right-6 flex items-center gap-1">
        52 <RectangleVertical size={18} />
      </span>
    </section>
  );
}

export default Header;
