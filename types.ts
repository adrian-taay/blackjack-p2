export type CardName =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export type Suit = "Heart" | "Diamond" | "Club" | "Spade";

export type Card = {
  suit: Suit;
  icon: React.ReactElement;
  displayIcon: React.ReactElement;
  name: CardName;
  value: number;
};

export type DrawnCards = {
  player?: "Dealer" | "You";
  numberOfCards: number;
  sumOfCards: number;
  cards: Card[];
};

export type ChipValue = 1 | 5 | 10 | 20 | 50 | 100 | 200 | 500 | 1000;

export type Chip = {
  value: ChipValue;
  color: string;
};

export type Btn = {
  btnIcon: React.ReactElement;
  btnName: string;
  color: string;
  action?: () => void;
};

export type DealResult = {
  result: string;
  earnings: number;
  newBalance: number;
};

export type ContextSettings = {
  playerBank: number;
  playerBet: number;
  setPlayerBet: React.Dispatch<React.SetStateAction<number>>;
  totalGames: number;
  showDealWindow: boolean;
  setShowDealWindow: React.Dispatch<React.SetStateAction<boolean>>;
  showDealResult: boolean;
  setShowDealResult: React.Dispatch<React.SetStateAction<boolean>>;
  gameDeck: Card[];
  setGameDeck: React.Dispatch<React.SetStateAction<Card[]>>;
  handleStartGame: () => void;
  handleStand: () => void;
  handleRestartGame: () => void;
  showHiddenDealerCard: boolean;
  dealerDrawnCards: DrawnCards;
  playerDrawnCards: DrawnCards;
  drawCardCount: number;
  playerDrawsOneCard: () => void;
  dealResult: DealResult;
  autoDraw: boolean;
};
