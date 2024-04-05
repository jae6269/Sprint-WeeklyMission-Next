import styles from '../styles/information.module.css';
import {
  FolderPageUserType,
  SharedPageUser,
} from '../types/interfaces/fetchDatas';

function Information({ user }: { user: any }) {
  if (!user) {
    return <button>로그인</button>;
  }

  return (
    <div className={styles.infoContainer}>
      <img
        className={styles.image}
        src={user.profileImageSource || user.data[0].image_source}
        alt="ProfileImg"
      />
      <span className={styles.email}>{user.email || user.data[0].email}</span>
    </div>
  );
}

export default Information;
