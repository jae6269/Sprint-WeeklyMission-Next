import styles from '../styles/information.module.css';
import useInformationData from '../hooks/useInformationData';

interface InformationProp {
  url: string;
}

function Information({ url }: InformationProp) {
  const myInfo = useInformationData(url);

  if (!myInfo) {
    return <button>로그인</button>;
  }

  return (
    <div className={styles.infoContainer}>
      <img
        className={styles.image}
        src={myInfo.profileImageSource || myInfo.data[0].image_source}
        alt="ProfileImg"
      />
      <span className={styles.email}>
        {myInfo.email || myInfo.data[0].email}
      </span>
    </div>
  );
}

export default Information;
