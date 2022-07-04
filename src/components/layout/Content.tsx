// external imports
import { FC } from 'react';
// local imports
import { Header } from './Head';

/**
 * Use the Page component for new pages. This setups a head tag.
 */
export const Content: FC<any> = ({
  children,
  className,
  style,
}) => {
  return (
    <>
      <Header />
      <div className={`h-full w-full ${className || ''}`} style={style}>
        {children}
      </div>
    </>
  );
};
