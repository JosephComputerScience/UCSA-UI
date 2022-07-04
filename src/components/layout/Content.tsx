// external imports
import { FC } from 'react';
// local imports
import { Header } from './Head';
// types
import { ChildrenType, StylingType } from '../../models/types';

/**
 * Content type extending styling and children types
 */
interface ContentType extends StylingType, ChildrenType {}

/**
 * Use the Page component for new pages. This setups a head tag.
 */
export const Content: FC<ContentType> = ({ children, className, style }) => {
  return (
    <>
      <Header />
      <div className={`h-full w-full ${className || ''}`} style={style}>
        {children}
      </div>
    </>
  );
};
