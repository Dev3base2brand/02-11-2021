import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import styles from '../../styles/Register.module.css';

export default function Register() {
  return (
    <div className={styles.registerCard}>
      <div className={styles.innerCard}>
      <img
              className={styles.xCircle}
              src="/images/register/x-circle.svg"
              alt=""
            />
        <h2 className={styles.welcomeTitle}>Welcome to <span>BECLOUT</span></h2>
        <div className={styles.welcomeDescription}>
          Let's get started with a few simple steps. A code will be sent to this
          email address for verification
        </div>

        <div className={styles.label}>E-Mail Address</div>
        <input className={styles.emailInput} />
        <button className={styles.emailButton}>
          <span>
            Continue
            <img
              className={styles.leftArrow}
              src="/images/register/left-arrow.svg"
              alt=""
            />
          </span>
        </button>
        <div className={styles.optionLine}>Or continue with</div>
        <div>
          <div className={styles.outerButton}>
            <button className={styles.registerOptions}>
              <img
                className={styles.loginSVG}
                src="/images/register/google.svg"
                alt=""
              />
              <span>Google</span>
            </button>
          </div>
          <div className={styles.outerButton}>
            <button className={styles.registerOptions}>
              <img
                className={styles.loginSVG}
                src="/images/register/facebook.svg"
                alt=""
              />
              <span>Facebook</span>
            </button>
          </div>
          <div className={styles.outerInformation}>Already have an account? <span>Log in</span></div>
        </div>
      </div>
    </div>
  );
}
