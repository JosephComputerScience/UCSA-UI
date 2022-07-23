// external imports
import { useState, FC } from 'react';
import Image from 'next/image';
// local imports
import { Avatar } from '../Avatar';
import { ChampionModalNav } from './ChampionModalNav';
// enums & models & types
import { CHAMPION_SQUARE_ENDPOINT } from '../../enums';
import { ChildrenType, StylingType } from '../../models/types';

export interface ChampionModalType extends StylingType, ChildrenType {
  assists: number;
  championName: string;
  championSplash: string;
  creepScore: number;
  crowdControl: number;
  deaths: number;
  dmgDealt: number;
  dmgTaken: number;
  gamesWon: number;
  gamesLost: number;
  kills: number;
  navClassName?: string;
  totalGames: number;
  visionScore: number;
  onNavClick?: (item: any) => any;
}

export const ChampionModal: FC<ChampionModalType> = ({
  championName,
  championSplash,
  dmgDealt,
  dmgTaken,
  visionScore,
  creepScore,
  crowdControl,
  gamesWon,
  gamesLost,
  totalGames,
  kills,
  deaths,
  assists,
  className,
  style,
  children,
  onNavClick,
  navClassName,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const navItems = ['Total', 'Average'];

  return (
    <>
      <div className={`card flex w-full ${className || ''}`}>
        <div
          className={`grid grid-cols-4 flex-auto items-center`}
          style={style}
        >
          <div>
            <Avatar
              className='w-12 h-12 relative rounded overflow-hidden'
              src={`${CHAMPION_SQUARE_ENDPOINT}/${championName}.png`}
              objectFit='contain'
            />
            <p>{championName}</p>
          </div>
          <div>
            <p>
              {kills}/{deaths}/{assists}
            </p>
          </div>
          <div>
            <p>{(gamesWon / totalGames) * 100}%</p>
          </div>
          <div>
            <p>
              {gamesWon}W/{gamesLost}L
            </p>
          </div>
        </div>
        <div className='relative h-4 w-4 self-end'>
          {showDetails ? (
            <Image
              src='/images/chevron-double-up.svg'
              layout='fill'
              objectFit='contain'
              onClick={() => setShowDetails(!showDetails)}
            />
          ) : (
            <Image
              src='/images/chevron-double-down.svg'
              layout='fill'
              objectFit='contain'
              onClick={() => setShowDetails(!showDetails)}
            />
          )}
        </div>
      </div>
      {showDetails && (
        <>
          <ChampionModalNav
            className={navClassName}
            items={navItems}
            onClickHandler={(item) => {
              if (onNavClick) {
                onNavClick(item);
              }
            }}
          />
          {children}
        </>
      )}
    </>
  );
};
