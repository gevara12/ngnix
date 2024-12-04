import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='grid grid-cols-2 gap-6 sm:grid-cols-2'>
        <button className='m-4 p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r'>
          <Link
            href='/shopping-list'
            className='block text-white px-4 py-2 font-semibold rounded-full bg-black hover:bg-transparent hover:text-white transition'
          >
            Покупки
          </Link>
        </button>
        <button className='m-4 p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r'>
          <Link
            href='/cards'
            className='block text-white px-4 py-2 font-semibold rounded-full bg-black hover:bg-transparent hover:text-white transition'
          >
            Карточки
          </Link>
        </button>
      </div>
    </main>
  );
}
