import React from 'react';
import styles from '../styles/profile.module.css';
import { SharedPageFolderOwner } from '../types/interfaces/fetchDatas';

interface ProfileProp {
  owner: SharedPageFolderOwner;
}

function Profile({ owner }: ProfileProp) {
  const { ownerImg, ownerName, folderName } = owner;
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
