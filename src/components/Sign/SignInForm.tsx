import { useForm } from 'react-hook-form';
import Image from 'next/image';
import eyeon from '@/public/images/eyeson.png';
import eyeoff from '@/public/images/eyesoff.png';
import styles from '@/src/styles/signInForm.module.css';
import {
  SIGN_IN,
  EMAIL_PLACEHOLDER,
  PW_PLACEHOLDER,
  EMAIL_VALIDATE,
  PASSWORD_VALIDATE,
  ERROR_INPUT_STYLE,
} from '@/src/constants/signConstants';
import SignHeader from './SignHeader';
import { useState } from 'react';

interface SignInForm {
  email: string;
  password: string;
}

export default function SignInForm() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ mode: 'onBlur' });

  const handlePasswordToggle = () => {
    setIsPasswordShown(!isPasswordShown);
  };
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
              style={errors.email && ERROR_INPUT_STYLE}
              placeholder={EMAIL_PLACEHOLDER}
              {...register('email', EMAIL_VALIDATE)}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.password}>
            <label className={styles.signLabel} htmlFor="signin-pw">
              비밀번호
            </label>
            <input
              id="password"
              type={isPasswordShown ? 'text' : 'password'}
              className={styles.signInput}
              style={errors.password && ERROR_INPUT_STYLE}
              placeholder={PW_PLACEHOLDER}
              {...register('password', PASSWORD_VALIDATE)}
            />
            <button
              className={styles.passwordToggle}
              onClick={handlePasswordToggle}
            >
              {isPasswordShown ? (
                <Image src={eyeon} alt="eye-on" />
              ) : (
                <Image src={eyeoff} alt="eye-off" />
              )}
            </button>

            {errors.password && (
              <p className={styles.errorMessage}>{errors.password.message}</p>
            )}
          </div>

          <button className={styles.button} type="submit">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
