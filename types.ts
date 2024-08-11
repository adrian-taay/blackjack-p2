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
  player: "Dealer" | "You";
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

export type ContextSettings = {
  gameDeck: Card[];
  setGameDeck: React.Dispatch<React.SetStateAction<Card[]>>;
  dealerCards: Card[];
  playerCards: Card[];
  dealerDrawnCards: DrawnCards;
  playerDrawnCards: DrawnCards;
  drawnCardCount: number;
  drawOneCard: () => void;
};
