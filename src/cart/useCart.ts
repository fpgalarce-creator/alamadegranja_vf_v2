import { useMemo, useState } from 'react';

/**
 * Estructura esperada del carrito:
 * - items: arreglo de productos agregados.
 * - quantity: unidades de cada producto (entero >= 1).
 */
export interface CartItem {
  id: string;
  quantity: number;
}

export interface UseCartResult {
  items: CartItem[];
  cartCount: number;
}

/**
 * Implementación mínima de carrito para usar cuando no existe un store global.
 * `cartCount` se deriva de la suma de `quantity` en `items`.
 */
export function useCart(initialItems: CartItem[] = []): UseCartResult {
  const [items] = useState<CartItem[]>(initialItems);

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  return { items, cartCount };
}
