import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import Profile from './Information';
import MainLogo from '@/public/svgs/mainLogo.svg';
import {
  FolderPageUserType,
  SharedPageUser,
} from '../types/interfaces/fetchDatas';

interface HeaderProp {
  user: SharedPageUser | FolderPageUserType;
}

function Header({ user }: HeaderProp) {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link className={styles.navLogo} href="/">
          <MainLogo />
        </Link>
        <Profile user={user}></Profile>
      </nav>
    </header>
  );
}
export default Header;
