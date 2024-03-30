import { useState } from 'react';
import styles from '../styles/folderList.module.css';
import LinkSearchBar from './LinkSearchBar';
import FolderSortBar from './FolderSortBar';
import FolderOptionBar from './FolderOptionBar';
import { FolderAddButtonMobile } from './FolderAddButton';
import Card from './Card';
import { USERS_LINKS_URL, USERS_FOLDERS_URL } from '../constants/urls';
import useLinksData from '../hooks/useLinksData';
import useFoldersData from '../hooks/useFoldersData';

import { ClickSortButton } from '../types/functionsType';
import { useDebounce } from '../hooks/useDebounce';

//폴더리스트 컴포넌트(폴더 페이지)

function FolderList() {
  //선택된 폴더 state (초기값은 "전체"폴더)
  const [selectedFolder, setSelectedFolder] = useState({ id: 1, name: '전체' });
  //LinkSearchBar Input state
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce(inputValue);
  //URL State
  const [linksFetchUrl, setLinksFetchUrl] = useState(USERS_LINKS_URL);
  const [foldersFetchUrl, setFoldersFetchUrl] = useState(USERS_FOLDERS_URL);

  //커스텀 훅을 이용해서 데이터 Fetch
  const links = useLinksData(linksFetchUrl);
  const folders = useFoldersData(foldersFetchUrl);

  //FolderList -> FolderSortBar -> SortButton으로 내려주는 함수
  const handleSortButtonClick: ClickSortButton = (newSelectedFolder) => {
    setSelectedFolder(newSelectedFolder);
    const query =
      newSelectedFolder.id === 1 ? '' : `?folderId=${newSelectedFolder.id}`;
    setLinksFetchUrl(USERS_LINKS_URL + query);
  };

  return (
    <div className={styles.foldersContainer}>
      <div className={styles.folders}>
        <LinkSearchBar inputValue={inputValue} setInputValue={setInputValue} />
        <div className={styles.folderList}>
          <FolderSortBar
            folders={folders}
            handleClick={handleSortButtonClick}
            selectedId={selectedFolder.id}
          ></FolderSortBar>
          <FolderOptionBar
            text={selectedFolder.name}
            selectedFolderId={selectedFolder.id}
          ></FolderOptionBar>

          {
            //links의 유무에 따라서 랜더링
            links.length === 0 ? (
              <div className={styles.noneList}>
                <p className={styles.noneText}>저장된 링크가 없습니다</p>
              </div>
            ) : (
              <div className={styles.links}>
                {links
                  .filter((card) => {
                    return (
                      card.description?.includes(debouncedValue) ||
                      card.url?.includes(debouncedValue) ||
                      card.title?.includes(debouncedValue)
                    );
                  })
                  .map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      time={card.lastTimeString}
                      imgUrl={card.imgUrl}
                      title={card.title}
                      description={card.description}
                      date={card.uploadDate}
                      url={card.url}
                    />
                  ))}
              </div>
            )
          }

          <FolderAddButtonMobile />
        </div>
      </div>
    </div>
  );
}
export default FolderList;
