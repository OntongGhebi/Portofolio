import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";

const NavbarMain = () => {
  return (
    <nav>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarBtn />
    </nav>
  );
};

export default NavbarMain;
