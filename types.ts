export const SECOND = 1;
export const MINUTE = 60 * SECOND;
export const INITIAL_TIME_PER_LEVEL = 2.5 * MINUTE;
export const EVENT_PROMPT_TIME = MINUTE;
export const TOTAL_LEVELS = 6;
export const INITIAL_ATTEMPTS_ALLOWED = 3;

export enum TIMER_STATUS {
  RUNNING = "RUNNING",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export enum PUZZLE {
  MUSIC_TECHNOLOGY = "MUSIC TECHNOLOGY",
  MEDIA = "MEDIA",
  INTERACTION = "INTERACTION",
  FILM = "FILM",
}

export interface IState {
  level: number;
  levelTime: number;
  timePerLevel: number;
  studiousLevel: number;
  socialLevel: number;
  isPaused: boolean;
  event: IEvent | null;
  currentPuzzle: PUZZLE | null;
  completedEvents: IEvent[];
  puzzlesCompleted: PUZZLE[];
  hints: string[];
}

export interface IEvent {
  level: number;
  levelTime: number;
  title: string;
  prompt: string;
  choices: IEventChoice[];
}

export interface IEventChoice {
  text: string;
  attribute: "studious" | "social";
  effect: "timePerLevel" | "hint";
  hint?: string;
}

export interface IPuzzleProps {
  completePuzzle: (puzzle: PUZZLE) => void;
}
