import styles from '@/src/styles/sign.module.css';
import SignHeader from '@/src/components/Sign/SignHeader';
import { SIGN_IN } from '@/src/constants/signConstants';
import SignForm from '@/src/components/Sign/SignForm';

export default function SignIn() {
  return (
    <div className={styles.signBackground}>
      <div className={styles.formContainer}>
        <SignHeader type={SIGN_IN} />
        <SignForm type={SIGN_IN} />
      </div>
    </div>
  );
}
