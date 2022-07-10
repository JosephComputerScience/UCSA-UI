// external imports
import classnames from 'classnames';
import { FC } from 'react';
// types
import { StylingType } from '../../models/types';

export type ItemType = {
  key: string;
  label: string;
};

interface NavType extends StylingType {
  items: ItemType[];
  onClick: (item: ItemType) => void;
  activeItemKey: string;
  borderColorClass?: string;
}

interface NavItemType extends StylingType {
  item: ItemType;
  onClick: (item: ItemType) => void;
}

const NavItem: FC<NavItemType> = ({ className, style, item, onClick }) => {
  const { label } = item;
  return (
    <div
      className={`text-xs font-semibold tracking-wide py-2 px-3 shadow-inner w-fit bg-secondary ${className}`}
      style={style}
    >
      <p
        className='hover:text-white cursor-pointer'
        onClick={() => onClick(item)}
      >
        {label}
      </p>
    </div>
  );
};

export const Nav: FC<NavType> = ({
  items,
  onClick,
  activeItemKey,
  borderColorClass,
}) => {
  const borderColor = borderColorClass || 'border-b-quaternary';
  return (
    <div className='flex mb-4'>
      {items.map((item, index) => {
        const { key } = item;
        const isActive = activeItemKey === key;
        return (
          <NavItem
            className={classnames(`${activeItemKey === key && borderColor}`, {
              'border-b-4': isActive,
              'text-white': isActive,
              'text-white/50': !isActive,
            })}
            key={`nav${index}${Math.floor(Math.random() * 1000)}`}
            item={item}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};
