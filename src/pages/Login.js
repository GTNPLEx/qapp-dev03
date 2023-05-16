import React, { useState } from 'react';
import Google from 'public/img/google.png';
import Facebook from 'public/img/facebook.png';
import Linkedin from 'public/img/linkedin.png';
import Logo from 'public/img/logo.svg';
import styles from 'src/styles/login.module.css';
import Navbar from 'src/components/Navbar.js';



const Login = () => {
  const [authenticated, setAuthenticated] = useState(false);

  function google() {
    window.open('https://qapp-dev03-cl23kdciu-gtnplex.vercel.app/auth/google', '_self');
    setAuthenticated(true);
  }


  const linkedin = () => {
    window.open('http://localhost:5000/auth/linkedin', '_self');
    setAuthenticated(true);
  };

  const facebook = () => {
    window.open('http://localhost:5000/auth/facebook', '_self');
    setAuthenticated(true);
  };

  // Your authentication logic here
  // You can set the authenticated state based on your criteria
  // For example, if the user is logged in successfully, you can call setAuthenticated(true)

  return (
    <div className={styles.login}>
       <img src={Logo} alt="Logo" className={styles.logo} /> Choose a Login Method
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={`${styles.loginButton} ${styles.google}`} onClick={google}>
            <img src={Google} alt="" className={styles.icon} />
            Google
          </div>
          <div className={`${styles.loginButton} ${styles.facebook}`} onClick={facebook}>
            <img src={Facebook} alt="" className={styles.icon} />
            Facebook
          </div>
          <div className={`${styles.loginButton} ${styles.github}`} onClick={linkedin}>
            <img src={Linkedin} alt="" className={styles.icon} />
            Linkedin
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.line} />
          <div className={styles.or}>OR</div>
        </div>
        <div className={styles.right}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className={styles.submit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
