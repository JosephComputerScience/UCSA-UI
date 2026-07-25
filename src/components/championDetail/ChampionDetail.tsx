import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {} from '@radix-ui/react-accordion';
import type { AggregateLeagueMatch } from '@/models/AggregateLeagueMatch';
import DataTable from './DataTable';
import DataTrigger from './DataTrigger';

type Props = {
  data: AggregateLeagueMatch;
};
function ChampionDetail({ data }: Props) {
  if (!data.championId) {
    // console.log('data', data);
  }
  if (Object.keys(data).length === 0) return null;
  return (
    <Accordion type='single' collapsible className='w-full sm:w-180 overflow-auto'>
      <AccordionItem value={data.championId.toString()}>
        <AccordionTrigger className='flex items-center hover:bg-gray-400 bg-gray-200 p-2'>
          <DataTrigger data={data} />
        </AccordionTrigger>
        <AccordionContent className='bg-gray-200 p-2'>
          <DataTable data={data} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ChampionDetail;
