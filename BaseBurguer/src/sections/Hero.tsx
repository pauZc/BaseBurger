export const Hero = (): JSX.Element => {
  return (
    <section id="top" className="relative flex h-[90vh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70 [filter:grayscale(0.15)_contrast(1.05)_brightness(0.75)]"
        src="/hero.mp4"
        autoPlay
        muted
        playsInline
        onEnded={(e) => e.currentTarget.pause()}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-6 font-sans text-xs font-medium tracking-[0.3em] text-smoke">
          Aplastamos carne. Rompemos antojos
        </p>
        <h1 className="max-w-4xl font-serif text-5xl font-medium leading-tight text-[#f4f4f0] md:text-7xl">
          Base Burger
        </h1>
        
      </div>
    </section>
  );
};
