import { createFileRoute } from '@tanstack/react-router';
import AppLayout from '@/layout/AppLayout';
import { useMemo, useState } from 'react';
import { type Summoner } from '@/models/Summoner';
import Tabs from '@/components/Tabs';
import { type LeagueGameType } from '@/types/LeagueGameType';
import type { AggregateGameMode } from '@/models/AggregateGameMode';
import ChampionDetail from '@/components/championDetail/ChampionDetail';
import type { AggregateLeagueMatch } from '@/models/AggregateLeagueMatch';
import SummonerCard from '@/components/summoner/Summoner';
import config from '@/config';
import { useQuery } from '@tanstack/react-query';
import {
  createColumnHelper,
  type ColumnDef,
} from '@tanstack/react-table';
import champions from '@/constants/champions';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// const config = getConfig();
const tabsToGameMode: Record<string, LeagueGameType> = {
  ARAM: 'ARAM',
  'NORMAL BLIND': 'NORMAL_BLIND',
  'NORMAL DRAFT': 'NORMAL_DRAFT',
  'RANKED FLEX': 'RANKED_FLEX',
  'RANKED SOLO': 'RANKED_SOLO',
} as const;

type LoaderData = {
  summoner: Summoner;
  aggregateMatches: AggregateGameMode;
};

function RouteComponent() {
  const params = Route.useParams();
  const { isPending, data, refetch } = useQuery<LoaderData>({
    queryKey: ['summoner'],
    queryFn: async () => {
      const { summonerName } = params;
      const searchParams = new URLSearchParams({ summonerName, tagLine: 'NA1' });
      const summonerResp = await fetch(
        `${config.apiBaseUrl}/lol/summoner?${searchParams.toString()}`,
      );
      const { summoner } = await summonerResp.json();
      const matchesResp = await fetch(
        `${config.apiBaseUrl}/lol/match/aggregate?puuid=${summoner.puuid}`,
      );
      const { aggregateMatches } = await matchesResp.json();
      return { summoner, aggregateMatches };
    },
  });

  const summoner = useMemo(() => data?.summoner ?? ({} as Summoner), [data]);
  const [tab, setTab] = useState<LeagueGameType>(tabsToGameMode.ARAM);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const aggregateMatches: AggregateGameMode = useMemo(
    () => data?.aggregateMatches ?? ({} as AggregateGameMode),
    [data],
  );

  const matches = useMemo<AggregateLeagueMatch[]>(() => {
    return Object.keys(aggregateMatches[tab] ?? {}).reduce<AggregateLeagueMatch[]>(
      (acc, championId) => {
        if (!championId) return acc;
        acc.push({ ...aggregateMatches[tab][Number(championId)] });
        return acc;
      },
      [],
    );
  }, [tab, aggregateMatches]);

  const totalPages = Math.ceil(matches.length / itemsPerPage);

  const paginatedMatches = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return matches.slice(startIndex, endIndex);
  }, [matches, currentPage, itemsPerPage]);

  const onChange = (value: string) => {
    setTab(value as LeagueGameType);
    setCurrentPage(1);
  };

  // const handleUpdateSummoner = async () => {
  //   const summonerResp = await
  //     `${config.apiBaseUrl}/lol/summoner?${searchParams.toString()}`
  //   );
  // };

  const columnHelper = createColumnHelper<AggregateLeagueMatch>();

  const columns: ColumnDef<AggregateLeagueMatch, string>[] = [
    columnHelper.accessor((row) => `${champions.data[row.championId].id}`, {
      id: 'championName',
      cell: (props) => (
        <ChampionDetail key={String(props.row.original.championId)} data={props.row.original} />
      ),
    }),
  ];

  return (
    <AppLayout>
      <SummonerCard summoner={summoner} loading={isPending} refetch={refetch} />
      <Tabs
        items={['ARAM', 'NORMAL BLIND', 'NORMAL DRAFT', 'RANKED FLEX', 'RANKED SOLO']}
        onChange={(e) => onChange(tabsToGameMode[e])}
      />
      {/* <ChampionDetail data={matches[0]} /> */}
      {paginatedMatches.length > 0
        ? paginatedMatches.map((match) => <ChampionDetail key={String(match.championId)} data={match} />)
        : null}
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => setCurrentPage(page)}
                isActive={currentPage === page}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </AppLayout>
  );
}

type Props = {
  summoner: Summoner;
  aggregateMatches: AggregateGameMode;
};

export const Route = createFileRoute('/summoner/$summonerName')({
  component: RouteComponent,
});
