// external imports
import { useState, FC } from 'react';
import classnames from 'classnames';
import { ChildrenType, StylingType } from '../../models/types';

interface ChampionModalNavType extends StylingType {
  defaultItem?: any;
  items: string[];
  textAlign?: string;
  onClickHandler: (item: any) => any;
}
export const ChampionModalNav: FC<ChampionModalNavType> = ({
  items,
  textAlign = 'center',
  onClickHandler,
  defaultItem = items && items[0],
}) => {
  const [active, setActiveItem] = useState(defaultItem);
  return (
    <div
      className={`card grid grid-cols-${items.length} rounded bg-white !px-2 my-4`}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={classnames(
            `cursor-pointer text-${textAlign} shadow tracking-wide`,
            {
              'bg-quaternary': active === item,
              'font-semibold': active === item,
            }
          )}
          onClick={() => {
            setActiveItem(item);
            if (onClickHandler) {
              onClickHandler(item);
            }
          }}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};
