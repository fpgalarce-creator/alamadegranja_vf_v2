import { useCart } from '../cart/useCart';

function CartBadge({ count }) {
  if (count <= 0) {
    return null;
  }

  return (
    <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-xs font-semibold text-white">
      {count}
    </span>
  );
}

export function CartEntryPoint() {
  const { cartCount } = useCart();

  return <CartBadge count={cartCount} />;
}
