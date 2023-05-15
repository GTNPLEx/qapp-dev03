import React from 'react';
import Google from 'src/img/google.png';
import Facebook from '../img/facebook.png';
import Linkedin from '../img/linkedin.png';
import styles from 'src/styles/login.module.css';

const Login = () => {
  function google() {
    window.open('http://localhost:5000/auth/google', '_self');
  }

  const linkedin = () => {
    window.open('http://localhost:5000/auth/linkedin', '_self');
  };

  const facebook = () => {
    window.open('http://localhost:5000/auth/facebook', '_self');
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.loginTitle}>Choose a Login Method</h1>
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
