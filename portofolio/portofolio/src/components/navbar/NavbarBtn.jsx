import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-lightGray border flex items-center gap-1 bg-gradient-to-r from-blue to-gray hover:scale-110 transition-all duration-300 hover:shadow-white">
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
