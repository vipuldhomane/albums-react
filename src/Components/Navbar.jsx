import { NavLink, Outlet } from "react-router-dom";
import Style from "./styles/navbar.module.css";
function NavBar() {
  return (
    <>
      <div className={Style.navbar}>
        <NavLink to="/">
          <h1 className={Style.heading}>Navbar</h1>
        </NavLink>
        <NavLink to="/add" className={Style.button9}>
          Add Album
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
