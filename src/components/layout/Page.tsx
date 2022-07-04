// external imports
import { FC } from 'react';
// local imports
import { Content } from './Content';
// types
import { StylingType, ChildrenType } from '../../models/types';

interface PageType extends StylingType, ChildrenType {}
/**
 * The page component is used to load content for the
 * application and setups the head tag. Do not put any props
 * on this component.
 */
export const Page: FC<PageType> = ({ children, className, style }) => {
  return (
    <Content className={`md:flex md:justify-center ${className}`} style={style}>
      {children}
    </Content>
  );
};

/**
 * PageContent will contain basic styling for centering
 * the content and controlling it's max-width
 */
export const PageContent: FC<PageType> = ({ children, className, style }) => {
  return (
    <div className={`md:max-w-screen-md w-full ${className}`} style={style}>
      {children}
    </div>
  );
};
