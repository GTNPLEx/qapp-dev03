import React, { useState } from 'react';
import { AiFillHome, AiOutlineInfoCircle, AiOutlinePhone } from 'react-icons/ai';
import styles from 'src/styles/Navbar.module.css';

const Navbar = ({ user, toggleColorMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className={styles.hamburger} onClick={handleToggleMenu}>
        <div className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`} />
        <div className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`} />
        <div className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`} />
      </div>
      <ul className={`${styles.navbarMenu} ${menuOpen ? styles.open : ''}`}>
        <li>
          <AiFillHome />
        </li>
        <li>
          <AiOutlineInfoCircle />
        </li>
        <li>
          <AiOutlinePhone />
        </li>
      </ul>
      <div>
        <span>{user ? `Logged in as ${user}` : 'Not logged in'}</span>
        <button onClick={toggleColorMode}>Toggle Color Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
