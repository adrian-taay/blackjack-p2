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

function DealResult() {
  const earningsLoss = (
    <span className="flex flex-col items-center gap-2">
      <span>Earnings / Loss</span>
      <span className="font-bold text-lg">Php 1,000</span>
    </span>
  );

  const newBalance = (
    <span className="flex flex-col items-center gap-2">
      <span>Your New Balance</span>
      <span className="font-bold text-lg">Php 11,000</span>
    </span>
  );
  return (
    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">You Won!</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col items-center my-8 gap-4 text-neutral-800">
            {earningsLoss}
            {newBalance}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Quit</AlertDialogCancel>
          <AlertDialogAction>Make Another Deal</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DealResult;
