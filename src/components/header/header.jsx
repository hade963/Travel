import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./header.css"
import Nav from '../../components/nav/nav'

export default function Header() { 
  const [show, setShow] = useState('hide');
  function handleShow() { 
    setShow((show) => show === 'hide' ? 'show' : 'hide');
  }
  const location = useLocation();
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="./assets/images/logo.png" alt="logo" />
        </div>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/packages' ? 'active' : ''}>
          <Link to="/packages">Packages</Link>
        </li>
        <li className={location.pathname === '/services' ? 'active' : ''}>
          <Link to="/services">Services</Link>
        </li>
      </ul>
      <button className='touch'>Get in Touch</button>
      <button onClick={handleShow} className='menu'><img src="/assets/images/menu-icon.svg" alt="" /></button>
      </div>
      <Nav active={show} setActive={handleShow}/>
    </header>
  );
}