import React from 'react';


const Navbar = ({ user, toggleColorMode }) => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <span>{user ? `Logged in as ${user}` : 'Not logged in'}</span>
        <button onClick={toggleColorMode}>Toggle Color Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;