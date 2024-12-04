'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useShoppingList } from './shopping-context';

export function AddItemForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const { actions } = useShoppingList();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      actions.addItem(name.trim(), quantity);
      setName('');
      setQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <Input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Add new item...'
        className='flex-grow'
      />
      <Input
        type='number'
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className='w-20'
      />
      <Button type='submit' size='icon'>
        <Plus className='h-4 w-4' />
      </Button>
    </form>
  );
}
