// external imports
import type { NextPage } from 'next';
// local imports
import { Page, PageContent } from '../components/layout';
import { SummonerDetail } from '../components/SummonerDetail';
// import fullConfig from '../../tailwind-full.config.js'; for later on

const Home: NextPage = () => {
  // console.log(fullConfig.theme.screens); gonna need this for later for state handling
  return (
    <Page>
      <PageContent>
        <SummonerDetail className='rounded overflow-hidden mb-2 bg-white' />
      </PageContent>
    </Page>
  );
};

export default Home;
