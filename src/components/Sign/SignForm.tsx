import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import eyeon from '@/public/images/eyeson.png';
import eyeoff from '@/public/images/eyesoff.png';
import styles from '@/src/styles/signForm.module.css';
import {
  SIGN_UP,
  EMAIL_PLACEHOLDER,
  PW_PLACEHOLDER,
  EMAIL_VALIDATE,
  PASSWORD_VALIDATE,
  ERROR_INPUT_STYLE,
  PW_REPEAT_PLACEHOLDER,
  PASSWORD_MISMATCH_ERROR_MESSAGE,
  PASSWORD_EMPTY_ERROR_MESSAGE,
  SIGN_IN,
} from '@/src/constants/signConstants';

interface SignFormProp {
  type: 'sign_in' | 'sign_up';
}
interface SignForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignForm({ type }: SignFormProp) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordConfirmShown, setIsPasswordConfirmShown] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignForm>({ mode: 'onBlur' });

  const handlePasswordToggle = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  const handlePasswordConfirmToggle = () => {
    setIsPasswordConfirmShown(!isPasswordConfirmShown);
  };

  return (
    <form
      className={styles.signForm}
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
    >
      <div className={styles.email}>
        <label className={styles.signLabel} htmlFor="email">
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
        <label className={styles.signLabel} htmlFor="paasword">
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

      {type === SIGN_UP && (
        <div className={styles.passwordConfirm}>
          <label className={styles.signLabel} htmlFor="passwordConfirm">
            비밀번호 확인
          </label>
          <input
            id="passwordConfirm"
            type={isPasswordConfirmShown ? 'text' : 'password'}
            className={styles.signInput}
            style={errors.passwordConfirm && ERROR_INPUT_STYLE}
            placeholder={PW_REPEAT_PLACEHOLDER}
            {...register('passwordConfirm', {
              required: PASSWORD_EMPTY_ERROR_MESSAGE,
              validate: (val: string) => {
                const password = getValues('password');
                return password === val || PASSWORD_MISMATCH_ERROR_MESSAGE;
              },
            })}
          />
          <button
            className={styles.passwordToggle}
            onClick={handlePasswordConfirmToggle}
          >
            {isPasswordConfirmShown ? (
              <Image src={eyeon} alt="eye-on" />
            ) : (
              <Image src={eyeoff} alt="eye-off" />
            )}
          </button>

          {errors.passwordConfirm && (
            <p className={styles.errorMessage}>
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>
      )}

      <button className={styles.button} type="submit">
        {type === SIGN_IN ? '로그인' : '회원가입'}
      </button>
    </form>
  );
}
