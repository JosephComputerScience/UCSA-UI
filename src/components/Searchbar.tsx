import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';
import { useNavigate } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Searchbar(
  props: React.ComponentProps<'div'>,
  onSearch?: (query: string) => void,
) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query);
      navigate({ to: '/summoner/$summonerName', params: { summonerName: query } });
    }
  };

  return (
    <div {...props}>
      <InputGroup className='sm:w-100 w-80 h-8 bg-white pr-1'>
        <InputGroupInput
          placeholder='Search summoner name...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <InputGroupAddon
          className='bg-gray-200 border mr-1 text-center p-0 h-5 w-9 font-semibold'
          align='inline-end'
        >
          <InputGroupText className='text-xs'>#NA1</InputGroupText>
        </InputGroupAddon>
        <InputGroupButton className='order-last' onClick={handleSearch}>
          <Search />
        </InputGroupButton>
      </InputGroup>
    </div>
  );
}
