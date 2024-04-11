import { useContext, useRef } from 'react';
import styles from '../styles/linkAddBar.module.css';
import LinkIcon from '@/public/svgs/linkIcon.svg';
import Button from './Button';
import { ModalContext } from '@/pages/folder';
import { ADD_TYPE } from '../constants/modalConstants';

/*
  폴더페이지에서 Header 컴포넌트 아래의
  링크추가 영역 컴포넌트입니다.
*/
const ADD_PLACEHOLDER = '링크를 추가해 보세요';

function LinkAddBar() {
  const { handleModalOpen } = useContext(ModalContext)!;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLinkAddModalOpen = () => {
    const link = inputRef.current?.value;
    handleModalOpen(ADD_TYPE, link);
  };
  return (
    <div className={styles.container}>
      <form className={styles.bar} id="link-add">
        <div className={styles.barContents}>
          <LinkIcon className="link-add__bar--img" alt="linkIcon" />
          <input
            className={styles.linkInput}
            placeholder={ADD_PLACEHOLDER}
            ref={inputRef}
            id="link-add__bar--input"
          />
        </div>
        <Button type="button" onClick={handleLinkAddModalOpen}>
          추가하기
        </Button>
      </form>
    </div>
  );
}
export default LinkAddBar;
