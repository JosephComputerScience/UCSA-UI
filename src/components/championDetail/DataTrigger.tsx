import champions from '@/constants/champions';
import type { AggregateLeagueMatch } from '@/models/AggregateLeagueMatch';

type Props = {
  data: AggregateLeagueMatch;
};

function DataTrigger({ data }: Props) {
  const dDragonChampion = champions.data[data.championId];

  return (
    <>
      <div className='flex-1'>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/${dDragonChampion.id}.png`}
          className='w-10'
        />
      </div>
      <div className='flex-2'>
        <div>AVG KDA {((data.kills + data.assists) / data.deaths).toFixed(2)} </div>
        <div className='tracking-wider'>
          {data.kills}/<span className='text-red-500'>{data.deaths}</span>/{data.assists}
        </div>
      </div>
      <div className='flex-2'>
        <div>AVG Win Rate</div>
        <div>{data.win}%</div>
      </div>
      <div className='flex-1'>Games {data.totalMatches}</div>
    </>
  );
}

export default DataTrigger;
