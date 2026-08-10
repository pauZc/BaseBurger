export const FindUs = (): JSX.Element => {
  return (
    <section id="location" className="w-full bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <h2 className="font-serif text-4xl font-medium text-[#f4f4f0] md:text-5xl">FIND US</h2>

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
            <h3 className="font-serif text-2xl font-medium text-[#f4f4f0]">Downtown Flagship</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-smoke">
              123 Culinary Avenue, Arts District, NY 10013
            </p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-smoke">
              Open daily 11:00 AM to 11:00 PM
            </p>
            <a
              href="https://maps.google.com"
              className="mt-5 inline-block font-sans text-xs font-medium tracking-[1.5px] text-ember underline underline-offset-4"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl font-medium text-[#f4f4f0]">Weekend Brunch</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-smoke">
              Saturdays &amp; Sundays, 10:00 AM &mdash; 2:00 PM
            </p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-smoke">
              Live jazz, bottomless mimosas, and our famous breakfast sliders.
            </p>
            <a
              href="#order"
              className="mt-5 inline-block font-sans text-xs font-medium tracking-[1.5px] text-ember underline underline-offset-4"
            >
              RESERVE A TABLE
            </a>
          </div>
          <div className="order-1 aspect-[4/3] w-full overflow-hidden rounded-sm md:order-2">
            <img
              src="https://picsum.photos/seed/weekend-brunch/800/600"
              alt="Weekend brunch spread"
              className="h-full w-full object-cover grayscale"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/burger-hands/800/600"
              alt="Freshly served burger"
              className="h-full w-full object-cover grayscale"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium text-[#f4f4f0]">Private Events</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-smoke">
              Host your next gathering in our private dining room.
            </p>
            <p className="mt-5 flex items-center gap-2 font-sans text-xs font-medium tracking-[1.5px] text-smoke">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              OPEN UNTIL 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
