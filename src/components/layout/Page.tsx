// external imports
import { FunctionComponent } from 'react';
// local imports
import { Content } from './Content';

export type ChildrenProps = {
  children?: React.ReactNode;
};

/**
 * The page component is used to load content for the
 * application and setups the head tag. Do not put any props
 * on this component.
 */
export const Page: FunctionComponent<ChildrenProps> = ({ children }) => {
  return <Content>{children}</Content>;
};
