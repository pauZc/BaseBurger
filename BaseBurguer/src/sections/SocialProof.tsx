const testimonials = [
  {
    quote:
      "Hands down the best burger I've ever had. The attention to detail in every bite is remarkable.",
    author: "SARAH M.",
  },
  {
    quote: "A true culinary experience. The truffle royale changed my life.",
    author: "JAMES L.",
  },
];

export const SocialProof = (): JSX.Element => {
  return (
    <section id="reviews" className="w-full bg-charcoal px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 font-serif text-4xl font-medium text-[#f4f4f0] md:text-5xl">
          SOCIAL PROOF
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/dining-scene/800/1000"
                alt="Guests enjoying dinner at Base Burguer"
                className="h-full w-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 right-[-1.5rem] hidden h-40 w-40 overflow-hidden rounded-sm border-4 border-charcoal shadow-xl md:block">
              <img
                src="https://picsum.photos/seed/chef-plating/300/300"
                alt="Chef plating a burger"
                className="h-full w-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 pt-2">
            {testimonials.map((t) => (
              <figure key={t.author}>
                <blockquote className="font-serif text-xl italic leading-relaxed text-[#f4f4f0] md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-sans text-xs font-medium tracking-[1.5px] text-smoke">
                  &mdash; {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
