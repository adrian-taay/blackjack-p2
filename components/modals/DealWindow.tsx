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
    handleStartGame,
    totalGames,
  } = useContext(BlackjackContext);
  const router = useRouter();

  return (
    <Dialog open={showDealWindow} onOpenChange={() => setShowDealWindow(false)}>
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
