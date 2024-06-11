import React,{useRef, useEffect, useState} from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link, Navigate, useNavigate} from 'react-router-dom'

import logo from '../../assets/images/logo.png';
import "./header.css";

const nav__links = [
  {
    path :'/home',
    display : 'Home'
  },
  {
    path : '/about',
    display : 'About'
  },
  {
    path : '/tours',
    display : 'Tours'
  }
];

const Header = () => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(null)
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80
        ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  useEffect(() => {
    const local = localStorage.getItem('user'); 
    const isUser = JSON.parse(local); 
  setIsAuth(isUser)
  },[])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsAuth(null)
    navigate("/login")
  }
  

  return (
  <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* WWWWWWWWWWWWWW LOGO WWWWWWWWWWWWW */}
          <div className="logo">
              <img src={logo} alt="logo"/>
          </div>
          {/* WWWWWWWWWWWWWW END LOGO WWWWWWWWWWWWW */}

          {/* WWWWWWWWWWWWWW MENU START WWWWWWWWWWWWW */}
          <div className="navigation">
            <ul className='menu d-flex align-items-center gap-5'>
              {
                nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active__link':""

                    }>{item.display}</NavLink>
                  </li>
              ))}
            </ul>
          </div>
          {/* WWWWWWWWWWWWWW MENU END WWWWWWWWWWWWW */}

          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-cemter gap-4">
              <Button className="btn secondary__btn">
                 {
                  isAuth == null ? 
                  <Link to="/login">Login</Link>:
                  <Link onClick={handleLogout}>logout</Link>
                 }
              </Button>       
              <Button className="btn primary__btn">
                <Link to="/register">Register</Link>
              </Button>
            </div>
            
            <span className='mobile__menu'>
            <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>)
};

export default Header;
