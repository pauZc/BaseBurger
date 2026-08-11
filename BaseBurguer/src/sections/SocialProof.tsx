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
          Acerca de Base Burger
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/dining-scene/800/1000"
                alt="Guests enjoying dinner at Base Burger"
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
            <p>Todo empezó con una idea sencilla: hacer una hamburguesa que realmente provocara volver por otra.</p>
            <p>No queríamos complicarla. Queríamos hacerla bien.</p>
            <p>Así nació este proyecto: de un sueño personal, muchas ganas de crear algo propio y la obsesión por conseguir ese momento perfecto en el que la carne toca una plancha bien caliente.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
