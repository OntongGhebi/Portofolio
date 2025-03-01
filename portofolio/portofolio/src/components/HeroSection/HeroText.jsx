const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="ls:text-2xl sm:text-xl uppercase text-blue">
        Software Developer and Logo Deigner
      </h2>
      <h1 className="md:text-[2.5rem] lg:text-5xl sm:text-4xl font-bold uppercase font-special text-orange/70">
        Ghebi Armando
      </h1>
      <p className="text-lg mt-4 text-white">
        A Passionate Software Developer with 1 years experience & <br /> Logo
        Designer with 2 years of experince.
      </p>
    </div>
  );
};

export default HeroText;
