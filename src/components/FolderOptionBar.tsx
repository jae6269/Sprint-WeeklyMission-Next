import { useContext } from 'react';
import styles from '../styles/folderOptionBar.module.css';
import shareIcon from '@/public/svgs/shareIcon.svg';
import renameIcon from '@/public/svgs/renameIcon.svg';
import deleteIcon from '@/public/svgs/deleteIcon.svg';
import OptionButton from './OptionButton';
import { ModalContext } from '@/pages/folder';
import {
  DELETE_TYPE,
  EDIT_TYPE,
  FOLDER_DELETE,
  FOLDER_RENAME,
  SHARE_TYPE,
} from '../constants/modalConstants';
import { FolderOptionBarProps } from '../types/interfaces/props';
/*
  폴더의 이름과 공유, 이름변경, 삭제 버튼이 표시되는
  FolderOptionBar 컴포넌트.

  text는 현재 폴더의 이름,
  selectedFolderId는 선택된 폴더의 id값입니다.
*/
function FolderOptionBar({ text, selectedFolderId }: FolderOptionBarProps) {
  const { handleModalOpen } = useContext(ModalContext)!;

  const handleRenameModalOpen = () => {
    handleModalOpen(EDIT_TYPE, FOLDER_RENAME);
  };

  const handleFolderDeleteModalOpen = () => {
    const purpose = {
      purpose: FOLDER_DELETE,
      id: selectedFolderId,
      name: text,
    };
    handleModalOpen(DELETE_TYPE, purpose);
  };

  const handleFolderShareModalOpen = () => {
    const purpose = {
      id: selectedFolderId,
      folderName: text,
    };
    handleModalOpen(SHARE_TYPE, purpose);
  };

  const buttonProps = [
    {
      id: 1,
      svg: shareIcon,
      text: '공유',
      handleModalOpen: handleFolderShareModalOpen,
    },
    {
      id: 2,
      svg: renameIcon,
      text: '이름 변경',
      handleModalOpen: handleRenameModalOpen,
    },
    {
      id: 3,
      svg: deleteIcon,
      text: '삭제',
      handleModalOpen: handleFolderDeleteModalOpen,
    },
  ];

  return (
    <div className={styles.optionBar}>
      <span className={styles.text}>{text}</span>
      <div className={styles.buttons}>
        {
          //id 가 1인 '전체'폴더가 선택되면 옵션 버튼이 안보이도록 설정.
          selectedFolderId !== 1 &&
            buttonProps.map((prop) => (
              <OptionButton
                key={prop.id}
                id={prop.id}
                svg={prop.svg}
                text={prop.text}
                handleModalOpen={prop.handleModalOpen}
              ></OptionButton>
            ))
        }
      </div>
    </div>
  );
}
export default FolderOptionBar;
