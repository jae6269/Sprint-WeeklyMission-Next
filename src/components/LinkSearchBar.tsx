import styles from '../styles/linkSearchBar.module.css';
import SearchIcon from '@/public/svgs/searchIcon.svg';
import SearchClearIcon from '@/public/svgs/searchClearIcon.svg';

const INPUT_PLACEHOLDER = '링크를 검색해 보세요.';

function LinkSearchBar({ inputValue, setInputValue }: any) {
  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickInputValueClear = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setInputValue('');
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} alt="searchIcon" />
        <input
          id="search--input"
          className={styles.searchInput}
          value={inputValue}
          placeholder={INPUT_PLACEHOLDER}
          onChange={handleInputValueChange}
        />
        {inputValue && (
          <button
            className={styles.clearButton}
            onClick={handleClickInputValueClear}
          >
            <SearchClearIcon
              className={styles.searchClear}
              alt="search-clear"
            />
          </button>
        )}
      </div>
      {inputValue && (
        <p className={styles.searchValue}>
          <span>{inputValue}</span>으로 검색한 결과입니다.
        </p>
      )}
    </>
  );
}
export default LinkSearchBar;
