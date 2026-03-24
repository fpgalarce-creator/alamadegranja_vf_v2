import { CartEntryPoint } from './CartEntryPoint';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Destacados', href: '#destacados' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#f7f1e8]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-10">
          <a href="#inicio" className="text-xl font-bold tracking-wide text-[#2f3a2c]">
            Alma de Granja
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="font-medium text-[#3f4b3a] transition hover:text-[#7a8f52]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="relative flex items-center gap-2 rounded-full border border-[#d9cfbf] px-4 py-2 font-medium text-[#3f4b3a] transition hover:bg-white"
          aria-label="Abrir carrito"
        >
          <span aria-hidden="true">🛒</span>
          <span>Carrito</span>
          <CartEntryPoint />
        </button>
      </div>
    </header>
  );
}
