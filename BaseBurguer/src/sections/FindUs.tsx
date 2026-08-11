export const FindUs = (): JSX.Element => {
  return (
    <section id="location" className="w-full bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <h2 className="font-serif text-4xl font-medium text-[#f4f4f0] md:text-5xl">Ubicación</h2>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/restaurant-interior/800/600"
              alt="Downtown Flagship dining room"
              className="h-full w-full object-cover grayscale"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mt-3 font-sans text-sm leading-relaxed text-smoke">
              Av Tecnológico 639-norte, colonia agrícola bellavista, 52172 Metepec, Méx.
            </p>
            <a
              href="https://maps.app.goo.gl/meSasqNZismeqmf1A"
              className="mt-5 inline-block font-sans text-xs font-medium tracking-[1.5px] text-ember underline underline-offset-4"
            >
              Ir al mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
