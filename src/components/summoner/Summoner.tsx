import msToMinutes from '@/lib/msToMinutes';
import msToHours from '@/lib/msToHours';
import msToDays from '@/lib/msToDays';
import { Button } from '@/components/ui/button';
import { Card, CardAvatar, CardContent, CardTitle, CardAction } from '@/components/ui/card';
import SummonerAvatar from './SummonerAvatar';
import { type Summoner } from '@/models/Summoner';
import { useMemo } from 'react';
import { Spinner } from '@/components/ui/spinner';

function formatLastUpdated(updatedAt: Date) {
  const now = new Date();
  const lastUpdated = new Date(updatedAt);
  const ms = now.getTime() - lastUpdated.getTime();
  const minutes = msToMinutes(ms);
  const hours = msToHours(ms);
  const days = msToDays(ms);

  const lastUpdatedAt: { lastUpdatedAt: string; canUpdate: boolean } = {
    lastUpdatedAt: '',
    canUpdate: minutes > 30,
  };

  if (days > 0) {
    lastUpdatedAt.lastUpdatedAt = `Last updated ${days} day${days > 1 ? 's' : ''} ago`;
    return lastUpdatedAt;
  }
  if (hours > 0) {
    lastUpdatedAt.lastUpdatedAt = `Last updated ${hours} hour${hours > 1 ? 's' : ''} ago`;
    return lastUpdatedAt;
  }
  lastUpdatedAt.lastUpdatedAt = `Last updated ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return lastUpdatedAt;
}

type Props = {
  summoner: Summoner;
  loading: boolean;
  refetch: () => void;
};
export default function Summoner({ summoner, loading, refetch }: Props) {
  const { canUpdate, lastUpdatedAt } = useMemo(
    () => formatLastUpdated(new Date(summoner.updatedAt)),
    [summoner]
  );

  return (
    <Card className='sm:w-75 gap-0 p-2 !flex-row'>
      <CardAvatar className='flex items-center justify-center'>
        <SummonerAvatar
          className='w-full h-full'
          src='https://ddragon.leagueoflegends.com/cdn/15.22.1/img/profileicon/5759.png'
        />
      </CardAvatar>
      <CardContent className='flex flex-col gap-3'>
        <CardTitle>
          {summoner.summonerName}
          <span className='ml-1 text-zinc-500'>#{summoner.tagLine}</span>
        </CardTitle>
        <CardAction>
          <Button disabled={!canUpdate}>{loading ? <Spinner /> : 'Update'}</Button>
        </CardAction>
        <div className='text-xs'>{summoner?.updatedAt ? lastUpdatedAt : null}</div>
      </CardContent>
    </Card>
  );
}
