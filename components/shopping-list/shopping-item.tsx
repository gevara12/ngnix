"use client";

import { useState } from 'react';
import { Check, Pencil, Trash, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingItem } from '@/lib/store';
import { useShoppingList } from './shopping-context';

interface ShoppingItemProps {
  item: ShoppingItem;
}

export function ShoppingItemComponent({ item }: ShoppingItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(item.name);
  const [editQuantity, setEditQuantity] = useState(item.quantity);
  const { actions } = useShoppingList();

  const handleSave = () => {
    if (editName.trim()) {
      actions.updateItem(item.id, { name: editName.trim(), quantity: editQuantity });
      setIsEditing(false);
    }
  };

  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
      item.purchased ? 'bg-muted/50' : 'bg-card hover:bg-accent/10'
    }`}>
      <Checkbox
        checked={item.purchased}
        onCheckedChange={() => actions.togglePurchased(item.id)}
        className="ml-2"
      />
      
      {isEditing ? (
        <>
          <Input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="flex-grow"
          />
          <Input
            type="number"
            value={editQuantity}
            onChange={(e) => setEditQuantity(parseInt(e.target.value) || 1)}
            min="1"
            className="w-20"
          />
          <Button size="icon" variant="ghost" onClick={handleSave}>
            <Check className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => setIsEditing(false)}>
            <X className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <>
          <span className={`flex-grow ${item.purchased ? 'line-through text-muted-foreground' : ''}`}>
            {item.name} × {item.quantity}
          </span>
          <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => actions.removeItem(item.id)}>
            <Trash className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}