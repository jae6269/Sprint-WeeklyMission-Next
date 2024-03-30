import { useForm } from 'react-hook-form';
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

interface SignInForm {
  email: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ mode: 'onBlur' });

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
              type="password"
              className={styles.signInput}
              style={errors.password && ERROR_INPUT_STYLE}
              placeholder={PW_PLACEHOLDER}
              {...register('password', PASSWORD_VALIDATE)}
            />
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
