import { useMemo, useState } from 'react';

export function useCart(initialItems = []) {
  const [items] = useState(initialItems);

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  return { items, cartCount };
}
