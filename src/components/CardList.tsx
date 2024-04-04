import { useState } from 'react';
import styles from '../styles/cardList.module.css';
import Card from './Card';
import LinkSearchBar from './LinkSearchBar';
import useCardsData from '../hooks/useCardsData';
import { useDebounce } from '../hooks/useDebounce';
import { CARDS } from '../constants/fetchConstants';
import { SAMPLE_FOLDER_URL } from '../constants/urls';
import { SharedPageLink } from '../types/interfaces/fetchDatas';

function CardList() {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce(inputValue);
  const cardsArray = useCardsData(CARDS, SAMPLE_FOLDER_URL) as SharedPageLink[];

  return (
    <div className={styles.cardsContainer}>
      <LinkSearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <div className={styles.cardsList}>
        {cardsArray
          ?.filter((card) => {
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
    </div>
  );
}

export default CardList;
