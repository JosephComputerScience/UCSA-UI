export const LEAGUE_GAME_TYPE = {
  ARAM: 'ARAM',
  NORMAL_BLIND: 'NORMAL_BLIND',
  NORMAL_DRAFT: 'NORMAL_DRAFT',
  RANKED_FLEX: 'RANKED_FLEX',
  RANKED_SOLO: 'RANKED_SOLO',
} as const;

export type LeagueGameType = (typeof LEAGUE_GAME_TYPE)[keyof typeof LEAGUE_GAME_TYPE];
