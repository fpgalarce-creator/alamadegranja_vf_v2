import heroImage from '../assets/hero-granja.svg';

const heroContent = {
  badge: 'Productos naturales directo del campo',
  title: 'Alimenta tu hogar con',
  highlight: 'calidad real',
  description:
    'En Alma de Granja seleccionamos cuidadosamente huevos de campo, quesos artesanales y productos frescos para que disfrutes sabor auténtico, natural y saludable en cada pedido.',
};

export function HeroHeader() {
  return (
    <section id="inicio" className="w-full bg-white">
      <div className="grid min-h-[90vh] lg:grid-cols-2">
        <div className="flex items-center px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          <div className="max-w-2xl motion-safe:animate-[heroFadeUp_700ms_ease-out_forwards] opacity-0">
            <span className="mb-6 inline-flex rounded-full border border-olive-700/15 bg-olive-700/5 px-4 py-2 text-sm font-medium text-olive-700">
              {heroContent.badge}
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-olive-900 sm:text-5xl lg:text-6xl">
              {heroContent.title}
              <span className="block text-olive-700">{heroContent.highlight}</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-olive-900/70 sm:text-lg">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#productos"
                className="inline-flex items-center rounded-xl bg-olive-700 px-7 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:bg-olive-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-700 focus-visible:ring-offset-2"
              >
                Ver productos
              </a>

              <a
                href="#nosotros"
                className="inline-flex items-center rounded-xl border border-olive-900/20 px-7 py-3 text-sm font-semibold text-olive-900 transition duration-300 hover:border-olive-700 hover:text-olive-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-700 focus-visible:ring-offset-2"
              >
                Conócenos
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <img
            src={heroImage}
            alt="Selección premium de productos frescos de granja"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-900/25 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
