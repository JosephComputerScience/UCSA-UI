import type { LeagueGameType } from '../types/LeagueGameType';
import type { AggregateLeagueMatch } from './AggregateLeagueMatch';

export type ChampionAggregateMatch = {
  [championId: number]: AggregateLeagueMatch;
};
export type AggregateGameMode = {
  [key in LeagueGameType]: ChampionAggregateMatch;
};
