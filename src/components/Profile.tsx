import React from 'react';
import styles from '../styles/profile.module.css';
import useCardsData from '../hooks/useCardsData';
import { PROFILE } from '../constants/fetchConstants';
import { SAMPLE_FOLDER_URL } from '../constants/urls';

function Profile() {
  const ownerInfo: any = useCardsData(PROFILE, SAMPLE_FOLDER_URL);
  const { ownerImg, ownerName, folderName } = ownerInfo;
  return (
    <div className={styles.profileContainer}>
      <div className={styles.folderOwner}>
        <img className={styles.ownerImg} src={ownerImg} alt={ownerName}></img>
        <span className={styles.ownerName}>@{ownerName}</span>
      </div>
      <div className={styles.folderName}>{folderName}</div>
    </div>
  );
}
export default Profile;
