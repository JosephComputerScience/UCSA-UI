import logo from '../assets/logoipsum-406.svg';
import Searchbar from '@/components/Searchbar';
import { useNavigate } from '@tanstack/react-router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate({ to: '/' });
  };
  return (
    <div className='flex flex-col h-screen max-w-screen'>
      <div className='flex flex-col items-center justify-center bg-sky-500 py-8'>
        <img className='sm:w-60 cursor-pointer' src={logo} alt='App Logo' onClick={navigateHome} />
        <Searchbar className='m-3' />
      </div>
      <main className='p-2 w-full sm:min-w-200 flex flex-col sm:w-fit sm:mx-auto gap-y-4'>
        {children}
      </main>
    </div>
  );
}
