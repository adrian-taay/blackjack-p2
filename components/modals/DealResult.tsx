"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BlackjackContext } from "@/context/BlackjackProvider";
import Link from "next/link";
import { useContext } from "react";
import { buttonVariants } from "../ui/button";

function DealResult() {
  const {
    dealResult: { result, earnings, newBalance },
    showDealResult,
    setShowDealResult,
    handleRestartGame,
  } = useContext(BlackjackContext);

  const earningsLoss = (
    <span className="flex flex-col items-center gap-2">
      <span>Earnings / Loss</span>
      <span className="font-bold text-lg">Php {earnings}</span>
    </span>
  );

  const newBalanceWrapper = (
    <span className="flex flex-col items-center gap-2">
      <span>Your New Balance</span>
      <span className="font-bold text-lg">Php {newBalance}</span>
    </span>
  );
  return (
    <AlertDialog open={showDealResult} onOpenChange={setShowDealResult}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center mb-6">
            {result}
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col items-center gap-4 text-neutral-800">
            {earningsLoss}
            {newBalanceWrapper}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel
            className={buttonVariants({ variant: "destructive" })}
          >
            <Link href={"/result"}>Cashout</Link>
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleRestartGame}>
            Make Another Deal
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DealResult;
