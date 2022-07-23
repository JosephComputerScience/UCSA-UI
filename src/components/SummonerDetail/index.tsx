// external imports
import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';
// local imports
import { Avatar } from '../Avatar';
// types
import { StylingType } from '../../models/types';

const renderQuick = [1, 2, 3, 4];
/**
 * SummonerDetail extends StylingType
 */
interface SummonerDetail extends StylingType {}
/**
 * Detail card for showing summoner info.
 * TODO: Pass src to avatar.
 * TODO: Pass ranks and data manpiulate it for season ranks
 * TODO: Convert to col-1 for grid on small screens
 * TODO: Pass summonerName
 * TODO: Pass wins, losts, and or total games
 */
export const SummonerDetail: FC<SummonerDetail> = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <div className='w-24 h-24 md:mr-4'>
        <Avatar
          className='w-full h-full relative'
          src='https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/5213.png'
          objectFit='cover'
          priority
        />
      </div>

      <div className='flex flex-col'>
        <div className='flex tracking-wide text-xs font-semibold'>
          {renderQuick.map((num, index) => (
            <div
              key={index}
              className={classnames(
                'rounded p-px border border-gray-300 bg-white text-gray-500',
                {
                  'ml-1': index !== 0,
                }
              )}
            >
              {`S${index + 1}: Gold`}
              {renderQuick.length - 1 !== index && <>&nbsp;</>}
            </div>
          ))}
        </div>
        <div>John Doe</div>
        <div className='flex items-center justify-start'>
          <div className={'w-8 h-10 relative mr-2'}>
            <Image
              src={'/images/ranked-emblems/Emblem_Challenger.png'}
              layout='fill'
              objectFit={'contain'}
            />
          </div>
          <div>
            <div className='text-xs text-gray-500'>104W 104L</div>
            <div className='text-xs text-gray-500'>Win Rate 50%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
