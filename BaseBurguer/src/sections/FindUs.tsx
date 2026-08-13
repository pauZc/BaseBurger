import { useEffect, useRef, useState } from "react";

const ADDRESS = "Av Tecnológico 639-norte, colonia agrícola bellavista, 52172 Metepec, Méx.";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

type MapState = "hidden" | "locating" | "revealed";

export const FindUs = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [mapState, setMapState] = useState<MapState>("hidden");

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapState("locating");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mapState !== "locating") return;
    const timer = setTimeout(() => setMapState("revealed"), 950);
    return () => clearTimeout(timer);
  }, [mapState]);

  const revealed = mapState !== "hidden";

  return (
    <section id="location" className="w-full bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <h2 className="font-serif text-4xl font-medium text-[#f4f4f0] md:text-5xl">Ubicación</h2>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div
            ref={panelRef}
            className="group relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border border-white/10 bg-charcoal shadow-2xl transition-transform duration-500 hover:scale-[1.015]"
          >
            <iframe
              title="Ubicación de Base Burger en Google Maps"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`h-full w-full border-0 grayscale transition-[opacity,filter] duration-700 group-hover:grayscale-0 ${
                mapState === "revealed" ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal transition-opacity duration-500 ${
                mapState === "revealed" ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="relative flex h-16 w-16 items-center justify-center">
                <span
                  className={`absolute h-16 w-16 rounded-full bg-ember/40 ${
                    mapState === "locating" ? "animate-ping" : "scale-0"
                  }`}
                />
                <svg
                  viewBox="0 0 24 32"
                  className={`relative h-10 w-8 drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    mapState === "locating"
                      ? "translate-y-0 scale-100 opacity-100"
                      : "-translate-y-6 scale-50 opacity-0"
                  }`}
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
                    fill="#ff9f0a"
                  />
                  <circle cx="12" cy="12" r="4.5" fill="#0d0d0d" />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>

          <div
            className={`transition-all duration-700 ease-out ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: revealed ? "200ms" : "0ms" }}
          >
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
