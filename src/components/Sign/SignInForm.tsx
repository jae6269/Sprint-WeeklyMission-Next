import { useForm } from 'react-hook-form';
import Image from 'next/image';
import styles from '@/src/styles/signInForm.module.css';
import {
  SIGN_IN,
  EMAIL_PLACEHOLDER,
  PW_PLACEHOLDER,
} from '@/src/constants/signConstants';
import SignHeader from './SignHeader';

interface FormType {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });

  return (
    <div className={styles.signBackground}>
      <div className={styles.formContainer}>
        <SignHeader type={SIGN_IN} />
        <form
          className={styles.signForm}
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        >
          <div className={styles.email}>
            <label className={styles.signLabel} htmlFor="signin-email">
              이메일
            </label>
            <input
              id="email"
              type="email"
              className={styles.signInput}
              placeholder={EMAIL_PLACEHOLDER}
              {...register('email')}
            />
          </div>
          <div className={styles.password}>
            <label className={styles.signLabel} htmlFor="signin-pw">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              className={styles.signInput}
              placeholder={PW_PLACEHOLDER}
              {...register('password')}
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
