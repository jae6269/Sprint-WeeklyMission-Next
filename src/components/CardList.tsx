import { useState } from 'react';
import styles from '../styles/cardList.module.css';
import Card from './Card';
import LinkSearchBar from './LinkSearchBar';
import { useDebounce } from '../hooks/useDebounce';
import { SharedPageLink } from '../types/interfaces/fetchDatas';

interface CardListProp {
  links: SharedPageLink[];
}

function CardList({ links }: CardListProp) {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce(inputValue);

  return (
    <div className={styles.cardsContainer}>
      <LinkSearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <div className={styles.cardsList}>
        {links
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
