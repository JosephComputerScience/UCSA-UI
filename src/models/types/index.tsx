// external imports
import { ReactNode } from 'react';

/**
 * Common style types attributes
 */
export interface StylingType {
  className?: string;
  style?: { [key: string]: any };
}

/**
 * Common children type attribute
 */
export interface ChildrenType {
  children?: ReactNode;
}
