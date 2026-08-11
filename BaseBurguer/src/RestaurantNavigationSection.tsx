import { useState } from "react";

const navigationItems = [
  { label: "MENU", href: "#menu" },
  { label: "ACERCA DE", href: "#reviews" },
  { label: "UBICACIÓN", href: "#location" },
];

export const RestaurantNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("OUR STORY");

  const handleOrderNow = (): void => {
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.hash = "order";
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10 bg-[#121212cc] border-b border-[#2b2b2b] backdrop-blur-[6px]">
      <div className="flex items-center gap-10">
        <a href="#top" aria-label="Base Burguer home" className="flex items-center gap-1.5">
          <span className="font-sans text-lg font-normal tracking-[-0.45px] text-[#f4f4f0]">
            BASE BURGER
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
        </a>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <div className="flex items-center gap-6">
            {navigationItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveItem(item.label)}
                  className="relative flex flex-col items-center py-1"
                >
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-sm bg-ember" />
                  )}
                  <span className="font-sans text-xs font-normal tracking-[1.2px] text-[#f4f4f0]">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};
