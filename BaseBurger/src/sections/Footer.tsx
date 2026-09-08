export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#2b2b2b] bg-ink px-6 pt-20 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 pb-10 md:flex-row md:items-start md:justify-between">
        <h2 className="font-serif text-4xl font-medium leading-none text-[#2b2b2b] md:text-6xl">
          BASE
          <br />
          BURGER
        </h2>

      </div>

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 border-t border-[#2b2b2b] py-6 md:flex-row">
        <p className="font-sans text-xs text-smoke">
          &copy; {year} Base Burger. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="#" aria-label="Instagram" className="text-smoke transition-colors hover:text-ember">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-smoke transition-colors hover:text-ember">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 8h-2a2 2 0 0 0-2 2v10M9 12h6" />
              <path d="M13 22V12" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="text-smoke transition-colors hover:text-ember">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C4 15.5 2.4 9.8 4.5 6.5 6.5 9 9.6 10.7 13 11c-.5-2.5.5-5 3.5-6C18.5 5 20 5.5 21 7c1 0 2-1 2-1z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
