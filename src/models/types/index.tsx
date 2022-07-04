import { ReactNode } from 'react';

/**
 * Common style types attributes
 */
export interface StylingType {
  className?: string;
  style?: { [key: string]: string | number };
}

/**
 * Common children type attribute
 */
export interface ChildrenType {
  children?: ReactNode;
}
