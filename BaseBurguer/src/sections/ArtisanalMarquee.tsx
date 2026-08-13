const REPEAT = Array.from({ length: 8 });

export const ArtisanalMarquee = () => {
  return (
    <div className="w-full overflow-hidden border-y border-[#2b2b2b] bg-charcoal py-6">
      <div
        className="flex w-max items-center gap-16 animate-marquee"
        style={{ "--gap": "4rem", "--duration": "22s" } as React.CSSProperties}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center gap-16" aria-hidden={group === 1}>
            {REPEAT.map((_, i) => (
              <span
                key={i}
                className={`font-serif text-3xl tracking-wide md:text-4xl ${
                  i % 2 === 0 ? "text-[#f4f4f0]" : "text-transparent [-webkit-text-stroke:1px_#3a3a3a]"
                }`}
              >
                El sabor que tu cuerpo pide
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
