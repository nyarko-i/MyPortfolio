import './navbar.css';
import isaac from '../assets/isaac.svg';
import  { useState, useRef} from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Correct import for react-scroll
import underline from '../assets/nav_underline.svg';
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu =() => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <img src={isaac} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li>
          <ScrollLink className='anchor-link' to='home' smooth={true} duration={500}>
            <p onClick={() => setMenu("home")}>Home</p>
          </ScrollLink>
          {menu === "home" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <ScrollLink className='anchor-link' to='about' smooth={true} offset={-50} duration={500}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </ScrollLink>
          {menu === "about" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <ScrollLink className='anchor-link' to='work' smooth={true} offset={-50} duration={500}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </ScrollLink>
          {menu === "work" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <ScrollLink className='anchor-link' to='contact' smooth={true} offset={-50} duration={500}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </ScrollLink>
          {menu === "contact" ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
