import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import './style.css';

const Header = () => (
  <>
    <header className="topbar">
      <div className="header">
        <h1>
          Indian Mutual Funds
        </h1>
        <div className="icons">
          <FaMicrophone />
          <FiSettings />
        </div>
      </div>
    </header>
  </>
);

export default Header;
