import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TabsDemo({
  items,
  onChange,
}: {
  items: string[];
  onChange?: (value: string) => void;
}) {
  return (
    <div className='flex w-fit flex-col gap-6'>
      <Tabs defaultValue={items[0]} onValueChange={onChange}>
        <TabsList>
          {items.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
