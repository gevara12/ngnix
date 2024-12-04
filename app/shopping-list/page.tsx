import { ShoppingWidget } from '@/components/shopping-list/widget';
import { ShoppingBag } from 'lucide-react';

export default function Shopping() {
  return (
    <main className='min-h-screen'>
      <div className='container max-w-2xl mx-auto p-4 space-y-8'>
        <div className='text-center space-y-2'>
          <div className='inline-flex items-center justify-center p-4 bg-primary/5 rounded-full'>
            <ShoppingBag className='h-8 w-8 text-primary' />
          </div>
          <h1 className='text-4xl font-bold tracking-tight'>Список покупок</h1>
          <ShoppingWidget />
        </div>
      </div>
    </main>
  );
}
