import type { CSSProperties } from "react";

const LAYER_DELAYS = {
  bottomBun: "0s",
  patty: "0.5s",
  cheese: "1s",
  lettuce: "1.5s",
  tomato: "2s",
  topBun: "2.5s",
} as const;

type SmokePuff = {
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  maxOpacity: number;
};

const SMOKE_PUFFS: SmokePuff[] = [
  { left: "4%", size: 90, duration: 11, delay: 0, drift: 30, maxOpacity: 0.22 },
  { left: "14%", size: 60, duration: 9, delay: 3, drift: -20, maxOpacity: 0.16 },
  { left: "24%", size: 110, duration: 13, delay: 6, drift: 40, maxOpacity: 0.2 },
  { left: "36%", size: 70, duration: 10, delay: 1.5, drift: -25, maxOpacity: 0.18 },
  { left: "48%", size: 95, duration: 12, delay: 4.5, drift: 20, maxOpacity: 0.22 },
  { left: "60%", size: 65, duration: 9.5, delay: 8, drift: -30, maxOpacity: 0.16 },
  { left: "71%", size: 105, duration: 14, delay: 2, drift: 35, maxOpacity: 0.2 },
  { left: "82%", size: 75, duration: 10.5, delay: 5.5, drift: -20, maxOpacity: 0.18 },
  { left: "92%", size: 85, duration: 11.5, delay: 7, drift: 25, maxOpacity: 0.2 },
];

export const SocialProof = () => {
  return (
    <section id="reviews" className="relative w-full overflow-hidden bg-[#671f14] px-6 py-24 md:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {SMOKE_PUFFS.map((puff, i) => (
          <span
            key={i}
            className="absolute bottom-0 animate-smoke rounded-full bg-white blur-2xl"
            style={
              {
                left: puff.left,
                width: `${puff.size}px`,
                height: `${puff.size}px`,
                animationDuration: `${puff.duration}s`,
                animationDelay: `${puff.delay}s`,
                "--drift": `${puff.drift}px`,
                "--max-opacity": puff.maxOpacity,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-12 font-serif text-4xl font-medium text-[#f4f4f0] md:text-5xl">
          Acerca de Base Burger
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative">
            <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-sm bg-charcoal">
              <div className="absolute h-40 w-64 rounded-full bg-ember/20 blur-3xl" />
              <svg
                viewBox="0 0 200 190"
                role="img"
                aria-label="Animación de una hamburguesa Base Burger formándose capa por capa"
                className="relative h-4/5 w-4/5"
              >
                <g
                  className="animate-build-layer"
                  style={{ "--animation-delay": LAYER_DELAYS.bottomBun, transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}
                >
                  <path d="M28 150 H172 V158 C172 172 160 182 146 182 H54 C40 182 28 172 28 158 Z" fill="#ff9f0a" />
                </g>

                <g
                  className="animate-build-layer"
                  style={{ "--animation-delay": LAYER_DELAYS.patty, transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}
                >
                  <rect x="22" y="132" width="156" height="22" rx="11" fill="#3a2114" />
                </g>

                <g
                  className="animate-build-layer"
                  style={{ "--animation-delay": LAYER_DELAYS.cheese, transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}
                >
                  <path
                    d="M26 118 H174 V124 L164 132 L154 124 L144 132 L134 124 L124 132 L114 124 L104 132 L94 124 L84 132 L74 124 L64 132 L54 124 L44 132 L34 124 L26 132 Z"
                    fill="#ffd54f"
                  />
                </g>

                <g
                  className="animate-build-layer"
                  style={{ "--animation-delay": LAYER_DELAYS.lettuce, transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}
                >
                  <path
                    d="M24 104 H176 V110 C168 116 160 108 152 114 C144 120 136 108 128 114 C120 120 112 108 104 114 C96 120 88 108 80 114 C72 120 64 108 56 114 C48 120 40 108 32 114 C28 116 24 112 24 110 Z"
                    fill="#7cb342"
                  />
                </g>

                <g
                  className="animate-build-layer"
                  style={{ "--animation-delay": LAYER_DELAYS.tomato, transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}
                >
                  <circle cx="52" cy="97" r="13" fill="#e2543a" />
                  <circle cx="84" cy="97" r="13" fill="#e2543a" />
                  <circle cx="116" cy="97" r="13" fill="#e2543a" />
                  <circle cx="148" cy="97" r="13" fill="#e2543a" />
                </g>

                <g
                  className="animate-build-layer"
                  style={{ "--animation-delay": LAYER_DELAYS.topBun, transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}
                >
                  <path d="M30 92 C30 55 62 28 100 28 C138 28 170 55 170 92 Z" fill="#ff9f0a" />
                  <ellipse cx="70" cy="52" rx="4" ry="2.6" fill="#fff3dc" transform="rotate(-18 70 52)" />
                  <ellipse cx="100" cy="44" rx="4" ry="2.6" fill="#fff3dc" />
                  <ellipse cx="130" cy="52" rx="4" ry="2.6" fill="#fff3dc" transform="rotate(18 130 52)" />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-10 pt-2">
            <p>Todo empezó con una idea sencilla: hacer una hamburguesa que realmente provocara volver por otra.</p>
            <p>No queríamos complicarla. Queríamos hacerla bien.</p>
            <p>Así nació este proyecto: de un sueño personal, muchas ganas de crear algo propio y la obsesión por conseguir ese momento perfecto en el que la carne toca una plancha bien caliente.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
