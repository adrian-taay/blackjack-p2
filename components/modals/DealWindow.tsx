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

import React from "react";
import PlayerFunds from "../PlayerFunds";
import { Handshake } from "lucide-react";

function DealWindow() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Start</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col text-center">
            <span className="text-sm">Balance</span>
            <span className="font-bold">Php 10,000</span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <PlayerFunds />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Quit</AlertDialogCancel>
          <AlertDialogAction className="flex gap-2 bg-neutral-700">
            <Handshake size={16} />
            <span>Deal</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DealWindow;
