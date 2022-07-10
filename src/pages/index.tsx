// external imports
import { useState } from 'react';
import type { NextPage } from 'next';
// local imports
import { Page, PageContent } from '../components/layout';
import { Nav, ItemType } from '../components/Nav';
import { SummonerDetail } from '../components/SummonerDetail';
// import fullConfig from '../../tailwind-full.config.js'; for later on

const items = [
  { key: 'WIN_RATE', label: 'Win rate' },
  { key: 'KDA', label: 'K/D/A' },
  { key: 'NUM_OF_GAMES', label: 'Num of games' },
];

const Home: NextPage = () => {
  const [activeNav, setActiveNav] = useState(items[0]);
  // console.log(fullConfig.theme.screens); gonna need this for later for state handling

  const onNavClick = (item: ItemType) => {
    setActiveNav(item);
  };

  return (
    <Page className='bg-primary'>
      <PageContent>
        <SummonerDetail className='rounded overflow-hidden mb-2 bg-white' />
        <Nav items={items} activeItemKey={activeNav.key} onClick={onNavClick} />
      </PageContent>
    </Page>
  );
};

export default Home;
