const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/logowhite.svg"
        alt="GA Studio Logo"
        className="lg:w-7 lg:h-7 mr-2 sm:w-9 sm:h-9 duration-300"
      />
      <h1 className="text-white text-2xl sm:hidden md:block">GA STUDIO</h1>
      <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden"></h1>
    </div>
  );
};

export default NavbarLogo;
