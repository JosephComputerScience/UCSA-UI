import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

type Props = {
  src?: string;
};
export default function SummonerAvatar({
  src,
  ...props
}: Props & React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <Avatar {...props}>
      <AvatarImage src={src} alt='Summoner Avatar' />
      <AvatarFallback>PIC</AvatarFallback>
    </Avatar>
  );
}
