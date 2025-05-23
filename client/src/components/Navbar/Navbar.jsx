import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth() || {}; // Fallback to empty object

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          ScholarshipFinder
        </Link>
        <SearchBar />
        <div className="nav-links">
          {currentUser ? (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;