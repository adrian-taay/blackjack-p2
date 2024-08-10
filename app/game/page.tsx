import Header from "@/components/Header";
import DrawnCardsWrapper from "@/components/DrawnCardsWrapper";
import PlayerControls from "@/components/PlayerControls";
import { Card, DrawnCards } from "@/types";
import { ClubIcon, DiamondIcon } from "lucide-react";
import DealWindow from "@/components/modals/DealWindow";
import DealResult from "@/components/modals/DealResult";
import PlayerBalance from "@/components/PlayerBalance";

export default function GamePage() {
  const sampleDraw: Card = {
    suit: "Diamond",
    icon: <DiamondIcon size={16} fill="red" color="red" />,
    displayIcon: <DiamondIcon size={40} fill="red" color="red" />,
    name: "7",
    value: 7,
  };

  const sampleDraw2: Card = {
    suit: "Club",
    icon: <ClubIcon size={16} fill="black" color="black" />,
    displayIcon: <ClubIcon size={40} fill="black" color="black" />,
    name: "A",
    value: 11,
  };

  const dealerCards: Card[] = [sampleDraw, sampleDraw];
  const playerCards: Card[] = [sampleDraw, sampleDraw2, sampleDraw];

  const dealerDrawnCards: DrawnCards = {
    player: "Dealer",
    numberOfCards: dealerCards.length,
    sumOfCards: dealerCards.reduce((a, b) => a + b.value, 0),
    cards: dealerCards,
  };

  const playerDrawnCards: DrawnCards = {
    player: "You",
    numberOfCards: playerCards.length,
    sumOfCards: playerCards.reduce((a, b) => a + b.value, 0),
    cards: playerCards,
  };

  return (
    <main className="h-screen flex flex-col justify-between bg-gradient-to-b from-[#6ea44f] via-[#5b8b46] to-[#1e4d07]">
      <Header />
      <DrawnCardsWrapper drawnCards={dealerDrawnCards} />
      <PlayerControls />
      <DrawnCardsWrapper drawnCards={playerDrawnCards} />
      {/* <DealWindow /> */}
      {/* <DealResult /> */}
      <PlayerBalance />
    </main>
  );
}
