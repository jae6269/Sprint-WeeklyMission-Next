import SortButton from './SortButton';
import styles from '../styles/folderSortBar.module.css';
import FolderAddButton from './FolderAddButton';
import { FolderSortBarProps } from '../types/interfaces/props';

function FolderSortBar({
  folders,
  handleClick,
  selectedId,
}: FolderSortBarProps) {
  return (
    <div className={styles.sortBar}>
      <div className={styles.buttons}>
        {folders.map((folder) => (
          <SortButton
            key={folder.id}
            id={folder.id}
            text={folder.name}
            handleClick={handleClick}
            isClicked={selectedId === folder.id}
          />
        ))}
      </div>

      <FolderAddButton />
    </div>
  );
}
export default FolderSortBar;
