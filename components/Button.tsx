"use client";

import clsx from "clsx";
import { Btn } from "@/types";
import { useContext } from "react";
import { BlackjackContext } from "@/context/BlackjackProvider";

function Button({ settings }: { settings: Btn }) {
  const { autoDraw } = useContext(BlackjackContext);
  const { btnIcon, btnName, color, action } = settings;

  return (
    <button
      className={clsx(
        "flex",
        "flex-col",
        "lg:flex-row",
        "justify-center",
        "items-center",
        "gap-1",
        autoDraw ? "bg-neutral-300" : color,
        autoDraw ? "cursor-default" : "cursor-pointer",
        "px-2",
        "lg:px-8",
        "py-2",
        "text-xs",
        "text-center",
        "text-white",
        "font-bold",
        "rounded-lg",
        "shadow-lg"
      )}
      onClick={action}
      disabled={autoDraw}
    >
      <span>{btnIcon}</span>
      <span>{btnName}</span>
    </button>
  );
}

export default Button;
