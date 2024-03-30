import Link from 'next/link';
import styles from '@/src/styles/signHeader.module.css';
import HomeIcon from '@/public/svgs/homeLogo.svg';
import { SIGN_IN, SIGN_UP } from '@/src/constants/signConstants';

interface SignHeaderType {
  type: 'sign_in' | 'sign_up';
}
export default function SignHeader({ type }: SignHeaderType) {
  return (
    <div className={styles.header}>
      <div className="sign__header--logo">
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>

      {type === SIGN_IN ? (
        <p className={styles.text}>
          회원이 아니신가요?{' '}
          <Link className={styles.link} href="/signup">
            회원가입하기
          </Link>
        </p>
      ) : (
        <p className={styles.text}>
          이미 회원이신가요?{' '}
          <Link className={styles.link} href="/signin">
            로그인하기
          </Link>
        </p>
      )}
    </div>
  );
}
