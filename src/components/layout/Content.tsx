// external imports
import { FunctionComponent } from 'react';
// local imports
import { Header } from './Head';
import { ChildrenProps } from './Page';

/**
 * Use the Page component for new pages. This setups a head tag.
 */
export const Content: FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
