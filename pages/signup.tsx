import styles from '@/src/styles/sign.module.css';
import SignHeader from '@/src/components/Sign/SignHeader';
import SignForm from '@/src/components/Sign/SignForm';
import { SIGN_UP } from '@/src/constants/signConstants';

export default function SignIn() {
  return (
    <div className={styles.signBackground}>
      <div className={styles.formContainer}>
        <SignHeader type={SIGN_UP} />
        <SignForm type={SIGN_UP} />
      </div>
    </div>
  );
}
