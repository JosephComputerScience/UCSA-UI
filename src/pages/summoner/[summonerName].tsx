// external imports
import { useState } from 'react';
import { useRouter } from 'next/router';
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
// local imports
import { Page, PageContent } from '../../components/layout';
import { Nav, ItemType } from '../../components/Nav';
import { SummonerDetail } from '../../components/SummonerDetail';
import { ChampionModal } from '../../components/ChampionModal';
// import fullConfig from '../../../../tailwind-full.config.js'; for later on

const items = [
  { key: 'WIN_RATE', label: 'Win rate' },
  { key: 'KDA', label: 'K/D/A' },
  { key: 'NUM_OF_GAMES', label: 'Num of Games' },
];
// championName: string;
// championSplash: string;
// dmgDealt: number;
// dmgTaken: number;
// visionScore: number;
// creepScore: number;
// crowdControl: number;
// gamesWon: number;
// gamesLost: number;
// totalGames: number;
// kills: number;
// deaths: number;
// assists: number;
const championItems = [
  {
    championName: 'Zed',
    championSplash:
      'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/Zed.png',
    dmgDealt: 9000,
    dmgTaken: 0,
    visionScore: 100,
    creepScore: 400,
    crowdControl: 0,
    gamesWon: 10,
    gamesLost: 10,
    totalGames: 20,
    kills: 20,
    deaths: 0,
    assists: 0,
    gold: 50000,
    towerDestroyed: 5,
    inhibDestroyed: 5,
  },
  {
    championName: 'Shen',
    championSplash:
      'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/Shen.png',
    dmgDealt: 9000,
    dmgTaken: 0,
    visionScore: 100,
    creepScore: 400,
    crowdControl: 0,
    gamesWon: 10,
    gamesLost: 10,
    totalGames: 20,
    kills: 19,
    deaths: 0,
    assists: 1,
    gold: 40000,
    towerDestroyed: 4,
    inhibDestroyed: 4,
  },
  {
    championName: 'Azir',
    championSplash:
      'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/Azir.png',
    dmgDealt: 9000,
    dmgTaken: 0,
    visionScore: 100,
    creepScore: 400,
    crowdControl: 0,
    gamesWon: 10,
    gamesLost: 10,
    totalGames: 20,
    kills: 18,
    deaths: 0,
    assists: 2,
    gold: 30000,
    towerDestroyed: 3,
    inhibDestroyed: 3,
  },
  {
    championName: 'Vayne',
    championSplash:
      'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/Vayne.png',
    dmgDealt: 9000,
    dmgTaken: 0,
    visionScore: 100,
    creepScore: 400,
    crowdControl: 0,
    gamesWon: 10,
    gamesLost: 10,
    totalGames: 20,
    kills: 17,
    deaths: 0,
    assists: 3,
    gold: 20000,
    towerDestroyed: 2,
    inhibDestroyed: 2,
  },
  {
    championName: 'Vi',
    championSplash:
      'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/Vi.png',
    dmgDealt: 9000,
    dmgTaken: 0,
    visionScore: 100,
    creepScore: 400,
    crowdControl: 0,
    gamesWon: 10,
    gamesLost: 10,
    totalGames: 20,
    kills: 16,
    deaths: 0,
    assists: 4,
    gold: 10000,
    towerDestroyed: 1,
    inhibDestroyed: 1,
  },
];

const SummonerPage: NextPage = () => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(items[0]);
  // console.log(fullConfig.theme.screens); gonna need this for later for state handling

  const onNavClick = (item: ItemType) => {
    setActiveNav(item);
  };

  return (
    <Page className='bg-primary'>
      <PageContent className='h-full'>
        <SummonerDetail className='rounded overflow-hidden mb-2 bg-white' />
        <Nav items={items} activeItemKey={activeNav.key} onClick={onNavClick} />
        <div className='mb-4'>
          {championItems.map((champion, index) => (
            <ChampionModal
              key={index}
              className='my-4'
              {...champion}
              onNavClick={(item) => console.log('item', item)}
            >
              <div className='card py-3'>
                <div className='grid grid-cols-4 grid-rows-2 gap-y-4'>
                  <div>
                    <p>Damage:</p>
                    {champion.dmgDealt}
                  </div>
                  <div>
                    <p>Damage Taken:</p>
                    {champion.dmgTaken}
                  </div>
                  <div>
                    <p>Vision Score:</p>
                    {champion.visionScore}
                  </div>
                  <div>
                    <p>Crowd Control:</p>
                    {champion.crowdControl}
                  </div>
                  <div>
                    <p>Gold:</p>
                    {champion.gold}
                  </div>
                  <div>
                    <p>Creep Score:</p>
                    {champion.creepScore}
                  </div>
                  <div>
                    <p>Tower Destroyed:</p>
                    {champion.towerDestroyed}
                  </div>
                  <div>
                    <p>Inhib Destroyed:</p>
                    {champion.inhibDestroyed}
                  </div>
                </div>
              </div>
            </ChampionModal>
          ))}
        </div>
      </PageContent>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { query } = context;
  return { props: {} };
};

export default SummonerPage;
