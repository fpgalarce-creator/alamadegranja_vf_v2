import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-linen text-olive-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <section className="rounded-3xl bg-white/80 p-8 shadow-soft backdrop-blur-sm md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-olive-700">
            Alma de Granja
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Productos orgánicos con alma artesanal.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-olive-700 md:text-lg">
            La base del proyecto quedó preparada para desplegar de forma estable en Vercel,
            manteniendo una estructura limpia para seguir construyendo secciones y componentes
            sin romper el preview.
          </p>
        </section>
      </main>
    </div>
  );
}
