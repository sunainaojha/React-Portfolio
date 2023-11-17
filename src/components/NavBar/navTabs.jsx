import { Link, useLocation } from 'react-router-dom';
import '../NavBar/navBar.css'


function navTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
         
          className={currentPage === '/' ? 'nav-link active' : 'nav-link' }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
       
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
         
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Work"
 
          className={currentPage === '/Work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </Link>
      </li>
    </ul>
  );
}

export default navTabs;
