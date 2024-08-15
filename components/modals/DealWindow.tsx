"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React, { useContext } from "react";
import PlayerFunds from "../PlayerFunds";
import { Handshake } from "lucide-react";
import { BlackjackContext } from "@/context/BlackjackProvider";
import { Button, buttonVariants } from "../ui/button";
import { useRouter } from "next/navigation";

function DealWindow() {
  const {
    showDealWindow,
    setShowDealWindow,
    playerBank,
    playerBet,
    startGame,
    handleStartGame,
    totalGames,
  } = useContext(BlackjackContext);
  const router = useRouter();

  function handleCloseWindow() {
    if (!startGame) {
      return;
    }

    setShowDealWindow(false);
  }

  return (
    <Dialog open={showDealWindow} onOpenChange={handleCloseWindow}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col text-center">
            <span className="text-sm">Bank</span>
            <span className="font-bold">Php {playerBank}</span>
          </DialogTitle>
          <DialogDescription>
            <PlayerFunds />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={totalGames === 0}
            className={buttonVariants({ variant: "destructive" })}
            onClick={() => router.push("/result")}
          >
            Cashout
          </Button>
          <Button
            className="flex gap-2 bg-neutral-700"
            onClick={handleStartGame}
            disabled={playerBet < 1}
          >
            <Handshake size={16} />
            <span>Deal</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DealWindow;
