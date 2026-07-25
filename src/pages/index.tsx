import { createFileRoute } from '@tanstack/react-router';

import '../App.css';
import AppLayout from '@/layout/AppLayout';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <AppLayout>
      <Button>Click me</Button>
    </AppLayout>
  );
}

export const Route = createFileRoute('/')({
  component: App,
});
