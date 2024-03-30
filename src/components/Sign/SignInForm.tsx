import { useForm } from 'react-hook-form';
import styles from '@/src/styles/signInForm.module.css';
import { SIGN_IN } from '@/src/constants/signConstants';
import SignHeader from './SignHeader';

export default function SignInForm() {
  return (
    <div className={styles.signBackground}>
      <div className={styles.formContainer}>
        <SignHeader type={SIGN_IN} />
        <form className={styles.signForm} id="sign-form">
          <div className={styles.email}>
            <label className={styles.signLabel} htmlFor="signin-email">
              이메일
            </label>
            <input
              className={styles.signInput}
              type="email"
              name="signin-email"
              id="signin-email"
            />
            <div className="email__error-msg" id="email__error-msg"></div>
          </div>
          <div className={styles.password}>
            <label className={styles.signLabel} htmlFor="signin-pw">
              비밀번호
            </label>
            <input
              className={styles.signInput}
              type="password"
              name="signin-pw"
              id="signin-pw"
            />
            <div className="pw__error-msg" id="pw__error-msg"></div>
            <img
              src="./icons/eyesoff.png"
              alt="eyesoff"
              className="pw-onoff"
              id="pw-onoff"
            />
          </div>
          <button className={styles.button} id="signin-button">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
