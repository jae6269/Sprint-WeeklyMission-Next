import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={'/folder'}>Folder Page</Link>
      <Link href={'/shared'}>Shared Page</Link>
      <Link href={'/signin'}>로그인</Link>
      <Link href={'/signup'}>회원가입</Link>
    </div>
  );
}
