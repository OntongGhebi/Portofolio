import "./App.css";
import NavbarBtn from "./components/navbar/NavbarBtn";
import NavbarLinks from "./components/navbar/NavbarLinks";
import NavbarLogo from "./components/navbar/NavbarLogo";
import NavbarMain from "./components/navbar/NavbarMain";

function App() {
  return (
    <main>
      <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div className="flex">
          <NavbarMain />
          <NavbarLogo />
          <NavbarLinks />
          <NavbarBtn />
        </div>
      </nav>
    </main>
  );
}

export default App;
