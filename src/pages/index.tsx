// external imports
import type { NextPage } from 'next';
import classnames from 'classnames';
// local imports
import { Page } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Page>
      <div className={classnames('text-2xl')}>hello</div>
    </Page>
  );
};

export default Home;
