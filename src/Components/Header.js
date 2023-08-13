import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../styled/Header.css';

import Logo from '../assets/image/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerHeight = 0;

  const handleScroll = () => {
    /* const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled); */
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* Mobile menu */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
    id="header"
    className={`${
      scrolled || isMenuOpen ? 'header-scrolled' : 'header-wrap'
    }`}
  >
      <div className='header-box'>
        <div className='header-left'>
          <Link to="home" smooth={true} duration={500}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className='header-flex-wrap'>
          <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}>
            <div id='menuToggle' onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav className={scrolled ? 'header-right scrolled' : 'header-right'}>
            <ul className='menu-wrap'>
              <li>
                <div>
                  <Link style={{ cursor: 'pointer' }} to="about" smooth={true} duration={500} offset={-headerHeight}>회사소개</Link>
                </div>
              </li>
              <li>
                <div>
                  <Link style={{ cursor: 'pointer' }} to="service" smooth={true} duration={500} offset={-headerHeight}>서비스</Link>
                </div>
              </li>
              <li>
                <div>
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSf05_vX4gy_PY6OYXuyWbosedkNC_sWYiYM53JPgn7tpKLq9g/viewform?usp=sf_link' target='_blank' rel="noreferrer">제휴 문의</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {isMenuOpen && (
            <div>
              <ul>
                <li>
                  <Link to='home' smooth={true} duration={500} onClick={closeMenu}>홈</Link>
                </li>
                <li>
                  <Link to='about' smooth={true} duration={500} offset={-headerHeight} onClick={closeMenu}>회사 소개</Link>
                </li>
                <li>
                  <Link to='service' smooth={true} duration={500} offset={-headerHeight} onClick={closeMenu}>서비스</Link>
                </li>
                <li>
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSf05_vX4gy_PY6OYXuyWbosedkNC_sWYiYM53JPgn7tpKLq9g/viewform?usp=sf_link' target='_blank' rel="noreferrer">제휴 문의</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
