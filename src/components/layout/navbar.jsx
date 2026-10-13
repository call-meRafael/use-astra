import { LogoAstra } from "../logo";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <LogoAstra size={48} className="drop-shadow-sm" />
      </div>
      <div className="title-wrapper">
        <span className="drop-shadow-sm">use</span>
        <h1 className="drop-shadow-sm">Astra</h1>
      </div>
    </nav>
  );
};
