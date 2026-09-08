const menuItems = [
  {
    name: "The Truffle Royale",
    description: "Wild mushrooms, truffle aioli, aged gruyère on a brioche bun.",
    price: "$24",
    image: "/menu-burger.png",
  },
  {
    name: "The Smoked Ember",
    description: "Charcoal-grilled patty, caramelized onions, house-made chipotle sauce.",
    price: "$22",
    image: "/menu-burger.png",
  },
  {
    name: "The Garden Heirloom",
    description: "Herb-roasted beet, heirloom tomato, basil pesto, brioche bun.",
    price: "$21",
    image: "/menu-burger.png",
  },
];

export const MenuHighlights = () => {
  return (
    <section id="menu" className="w-full bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-serif text-4xl font-medium text-[#f4f4f0] md:text-5xl">
            MENU
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item) => (
            <article key={item.name} className="group flex flex-col">
              <div className="mb-5 aspect-square w-full overflow-hidden rounded-sm bg-charcoal">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#f4f4f0]">{item.name}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-smoke">
                {item.description}
              </p>
              <p className="mt-3 font-sans text-sm font-semibold text-ember">{item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
