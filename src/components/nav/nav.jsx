import './nav.css'
import { Link, useLocation } from 'react-router-dom'


export default function Nav(props) { 
  const location = useLocation();
  return(
    <nav className={props.active}>
      <div className='exit' onClick={props.setActive}><img src="/assets/images/menu-icon-1.svg" alt="exit" /></div>
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
      <button  className='touch'>Get in Touch</button>
    </nav>
  );
}