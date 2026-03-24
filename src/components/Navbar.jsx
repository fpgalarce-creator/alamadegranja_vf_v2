import { useState } from 'react';
import { CartEntryPoint } from './CartEntryPoint';

const navItems = ['Inicio', 'Destacados', 'Productos', 'Nosotros', 'Contacto'];

function CartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
      <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 7H6.2" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-olive-900/10 bg-linen/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <button
          type="button"
          className="inline-flex items-center rounded-lg p-2 text-olive-900 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="text-sm font-medium">Menú</span>
        </button>

        <ul className="hidden flex-1 items-center gap-6 text-sm font-medium text-olive-700 md:flex">
          {navItems.slice(0, 2).map((item) => (
            <li key={item}>
              <a href="#" className="transition hover:text-olive-900">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="mx-auto px-4 text-center text-xl font-semibold tracking-wide text-olive-900 md:text-2xl">
          Alma de Granja
        </a>

        <ul className="hidden flex-1 items-center justify-end gap-6 text-sm font-medium text-olive-700 md:flex">
          {navItems.slice(2).map((item) => (
            <li key={item}>
              <a href="#" className="transition hover:text-olive-900">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative ml-3 inline-flex items-center gap-2 rounded-full border border-olive-900/20 bg-white/70 px-3 py-2 text-sm font-medium text-olive-900 shadow-sm transition hover:bg-white"
          aria-label="Abrir carrito"
        >
          <CartIcon />
          <span className="hidden sm:inline">Carrito</span>
          <CartEntryPoint />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-olive-900/10 bg-linen px-4 py-4 md:hidden">
          <ul className="space-y-3 text-sm font-medium text-olive-700">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="block rounded-lg px-2 py-1 transition hover:bg-white/60 hover:text-olive-900">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
