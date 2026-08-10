const qualityPoints = [
  "GRASS-FED BEEF",
  "HOUSE BRIOCHE BUNS",
  "AGED CHEDDAR",
  "HEIRLOOM TOMATO",
];

export const BeliefsSection = (): JSX.Element => {
  return (
    <section id="our-story" className="w-full bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
        <h2 className="font-serif text-4xl font-medium leading-tight text-[#f4f4f0] md:text-5xl">
          WE BELIEVE IN <span className="italic text-ember">honesty</span>, CRAFT,{" "}
          <span className="italic text-ember">and</span> FIRE
        </h2>

        <div className="flex flex-col">
          {qualityPoints.map((point) => (
            <a
              key={point}
              href="#menu"
              className="group flex items-center justify-between border-b border-[#2b2b2b] py-5 first:border-t"
            >
              <span className="font-sans text-sm font-medium tracking-[1.5px] text-[#f4f4f0]">
                {point}
              </span>
              <span
                aria-hidden="true"
                className="font-sans text-lg text-smoke transition-transform group-hover:translate-x-1 group-hover:text-ember"
              >
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
