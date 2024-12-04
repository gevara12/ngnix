'use client';

import { Trash2 } from 'lucide-react';

import { useShoppingList } from '@/components/shopping-list/shopping-context';
import { AddItemForm } from '@/components/shopping-list/add-item-form';
import { ShoppingItemComponent } from '@/components/shopping-list/shopping-item';

import { Button } from '@/components/ui/button';
export const ShoppingWidget = () => {
  const { items, actions, isLoading } = useShoppingList();
  const purchasedCount = items.filter((item) => item.purchased).length;

  return (
    <div className='text-left'>
      <div className='text-center'>
        <p className='text-muted-foreground mb-3'>
          {purchasedCount} of {items.length} items purchased
        </p>
      </div>

      {purchasedCount > 0 && (
        <Button
          variant='outline'
          size='sm'
          onClick={actions.clearPurchased}
          className='mt-2'
        >
          <Trash2 className='h-4 w-4 mr-2' />
          Clear Purchased Items
        </Button>
      )}

      <AddItemForm />

      <div className='mt-4 space-y-2'>
        {isLoading ? (
          <div className='text-center py-12 text-muted-foreground'>
            Loading...
          </div>
        ) : (
          items
            .slice()
            .sort((a, b) => {
              if (a.purchased === b.purchased) {
                return b.createdAt - a.createdAt;
              }
              return a.purchased ? 1 : -1;
            })
            .map((item) => <ShoppingItemComponent key={item.id} item={item} />)
        )}
      </div>
      {items.length === 0 && (
        <div className='text-center py-12 text-muted-foreground'>
          Your shopping list is empty. Add some items to get started!
        </div>
      )}
    </div>
  );
};
