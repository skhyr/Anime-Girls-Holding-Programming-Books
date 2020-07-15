import { Link } from "gatsby";
import * as React from "react";
import "./style.css";
import { slide as Menu } from "react-burger-menu";
import Sidebar from "../Sidebar";
import burger from "./menu.svg";
const MenuIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    className="burger-svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h48v48H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const Header = ({ page }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Menu
        customBurgerIcon={false}
        width={280}
        isOpen={open}
      >
        <Sidebar />
        {/*<button onClick={() => onSidebarOpen(true)}>open</button>*/}
      </Menu>
      <header className="page-header">
        <div
          className="page-header-content"
          style={{
            margin: `0 auto`,
          }}
        >
          <div className="burger-icon display-on-mobile">
            <MenuIcon onClick={() => setOpen(true)}  />
          </div>
          {/*<img className="burger-icon" src={burger} />*/}
          <h1 style={{ margin: 0 }} className="site-title">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {`Anime Girls Holding ${page} Books`}
            </Link>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
