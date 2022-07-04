// external imports
import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
// local imports

interface AvatarType extends ImageProps {
  objectFit: ImageProps['objectFit'];
}
/**
 * Uses a Nextjs image with layout set to fill.
 * The mandatory attribute objectFit is of value
 * [fill | contain | cover | none | scale-down]
 * @param
 * @returns
 */
export const Avatar: FC<AvatarType> = ({
  src,
  className,
  style,
  objectFit,
}) => {
  return (
    <div className={className} style={style}>
      <Image src={src} layout='fill' objectFit={objectFit} />
    </div>
  );
};
