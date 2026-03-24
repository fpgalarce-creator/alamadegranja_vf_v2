import { useCart } from '../cart/useCart';

function CartBadge({ count }: { count: number }) {
  if (count <= 0) {
    return null;
  }

  return <span aria-label="Productos en carrito">{count}</span>;
}

export function CartEntryPoint() {
  // Reemplaza `const cartCount = 0;` por una fuente real derivada del hook.
  const { cartCount } = useCart();

  return (
    <>
      <div data-device="desktop">
        <CartBadge count={cartCount} />
      </div>

      <div data-device="mobile">
        <CartBadge count={cartCount} />
      </div>
    </>
  );
}
