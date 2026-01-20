import Links from "./NavLinks";
import "../Nav.css";

// import icon from open source library
import { MdOutlineMenu, MdClose } from 'react-icons/md'

// allows to track state in a function component
import { useState } from "react";

function NavMobile() {
  const [click, setClick] = useState(false);

  const Hamburger = <MdOutlineMenu className="hamburger-icon" 
    size="30px" 
    color="#ffffff"
    onClick={() => setClick(!click)} />

  const Close = <MdClose className="hamburger-icon"
    size="30px" 
    color="#ffffff"
    onClick={() => setClick(!click)} />

  return(
    <nav className="mobile">
      {click ? Close : Hamburger}
      {click && <Links />}
    </nav>
  );
}

export default NavMobile;
