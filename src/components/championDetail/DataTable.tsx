import type { AggregateLeagueMatch } from '@/models/AggregateLeagueMatch';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

type Props = {
  data: AggregateLeagueMatch;
};

function DataTable({ data }: Props) {
  const [tab, setTab] = useState('All');
  return (
    <div>
      <div className='w-fit'>
        <Tabs defaultValue={'All'} onValueChange={setTab}>
          <TabsList>
            {['All', 'Damage', 'Tanked', 'Streaks', 'Etc'].map((item) => (
              <TabsTrigger key={item} value={item}>
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-2'>
        {tab === 'Damage' || tab === 'All' ? (
          <>
            <div>Avg Phys Dmg: {data.physicalDamage}</div>
            <div>Avg Mag Damage: {data.magicalDamage}</div>
            <div>Avg True Damage: {data.trueDamage}</div>
          </>
        ) : null}

        {tab === 'Tanked' || tab === 'All' ? (
          <>
            <div>Avg Phys Dmg Taken: {data.physicalDamageTaken}</div>
            <div>Avg Mag Damage Taken: {data.magicalDamageTaken}</div>
            <div>Avg True Damage Taken: {data.trueDamageTaken}</div>
          </>
        ) : null}

        {tab === 'Streaks' || tab === 'All' ? (
          <>
            <div>Avg Double Kills: {data.doubleKills}</div>
            <div>Avg Triple Kills: {data.tripleKills}</div>
            <div>Avg Quadra Kills: {data.quadraKills}</div>
            <div>Avg Penta Kills: {data.pentaKills}</div>
          </>
        ) : null}

        {tab === 'Etc' || tab === 'All' ? (
          <>
            <div>Avg Gold Earned: {data.goldEarned}</div>
            <div>Avg CC Score: {data.crowdControlScore}</div>
            <div>Avg Building Dmg: {data.damageDealtToBuildings}</div>
            <div>Avg First Tower: {data.firstTowerKill}</div>
            <div>Avg First Blood: {data.firstBlood}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default DataTable;
