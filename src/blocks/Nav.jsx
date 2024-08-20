import { useEffect, useState } from 'react';
import companyLogo from '../images/logo.png';


function Nav() {

  const [navBG, setNavBG]=useState(false)
 
  const changeNavBG = () => {
    
      if (window.scrollY <= 10 ) {
          setNavBG(true)
      } else {
          setNavBG(false)
      }}

      useEffect(()=> {
          setTimeout(()=>setNavBG(true))
      },[])

      window.addEventListener('scroll', changeNavBG)

    return (
    <header className={navBG ? "header header-nobg container" : "header header-bg container"}>
      <a href="" className="header__logo logo">
        <img src={companyLogo} alt="SWAMP" className="header__logo-image" loading='lazy' />
      </a>
      <nav className="header__menu hidden-mobile">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a href="" className="header__menu-link">BLABLA</a>
          </li>
          <li className="header__menu-item">
            <a href="" className="header__menu-link">Another Bla bla</a>
          </li>
          <li className="header__menu-item">
            <a href="" className="header__menu-link">Contacts</a>
          </li>
        </ul>
      </nav>
      <button className="burger-button visible-mobile">
  <span></span>
  <span></span>
  <span></span>
</button>
    </header>
    );
  }
  
  export default Nav;