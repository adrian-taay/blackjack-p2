"use client";

import { Card } from "@/types";
import clsx from "clsx";

function CardWrapper({ details }: { details: Card | null }) {
  if (!details)
    return (
      <div
        className="bg-white py-2 px-1 rounded-lg shadow-md flex justify-center items-center"
        style={{ width: 100, height: 150 }}
      >
        <h1 className="font-extrabold text-xs text-center border-2 border-black">
          BLΛƆK JΛƆK
        </h1>
      </div>
    );

  const { suit, icon, displayIcon, name } = details;

  const CardEdge = (
    <div
      className={clsx(
        "w-2/5",
        "flex",
        "flex-col",
        "items-center",
        "font-bold",
        suit === "Diamond" || suit === "Heart" ? "text-red-600" : "text-black"
      )}
    >
      <span>{name}</span>
      <span>{icon}</span>
    </div>
  );

  return (
    <div
      className="bg-white py-2 px-1 rounded-lg shadow-md flex flex-col"
      style={{ width: 100, height: 150 }}
    >
      <div>{CardEdge}</div>
      <div className="flex-1 flex justify-center items-center">
        {displayIcon}
      </div>
      <div className="rotate-180">{CardEdge}</div>
    </div>
  );
}

export default CardWrapper;
