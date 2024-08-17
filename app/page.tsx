'use client';

import { BlackjackContext } from '@/context/BlackjackProvider';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import LogoIconImg from '@/public/logo.png';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const { setShowDealWindow } = useContext(BlackjackContext);

  function handleStart() {
    router.push('/game');
  }

  const LogoIcon = (
    <Image
      src={LogoIconImg}
      width={84}
      height={84}
      alt="Blackjack icon logo"
    />
  );

  const MainTitle = (
    <h1 className="font-extrabold text-3xl lg:text-6xl text-center items-center tracking-widest border-4 lg:border-8 border-white text-white px-4 py-2">
      BLΛƆKJΛƆK
    </h1>
  );

  const StartGameBtn = (
    <button
      onClick={handleStart}
      className="flex items-center bg-yellow-500 hover:bg-yellow-400 px-8 py-2 border border-white rounded-lg font-bold text-white shadow-lg">
      <span>Start Game</span>
      <span>
        <ChevronRight />
      </span>
    </button>
  );

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#6ea44f] via-[#5b8b46] to-[#1e4d07] gap-10 lg:gap-20">
      <div className="flex flex-col items-center">
        {/* {LogoIcon} */}
        {MainTitle}
      </div>
      {StartGameBtn}
    </main>
  );
}
