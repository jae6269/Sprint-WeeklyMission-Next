import { useState } from 'react';
import styles from '../styles/card.module.css';
import noneImg from '@/public/svgs/noneImg.svg';
import starIcon from '@/public/svgs/starIcon.svg';
import meatballsIcon from '@/public/svgs/meatballsIcon.svg';

import PopOver from '@/src/components/PopOver';
import { CardProps } from '@/src/types/interfaces/props';
import { ClickFunctionType } from '@/src/types/functionsType';

function Card({
  id,
  time,
  imgUrl = noneImg,
  title,
  description,
  date,
  url,
}: CardProps) {
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);

  const handleClick: ClickFunctionType = (e) => {
    e.preventDefault();
    setIsPopOverOpen(!isPopOverOpen);
  };

  return (
    <a
      className={styles.card}
      key={id}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.cardImg}>
        <img className={styles.cardBackground} src={imgUrl} alt={title}></img>
        <img className={styles.starIcon} src={starIcon} alt="Favorites" />
      </div>

      <div className={styles.texts}>
        <div className={styles.time}>
          <p>{time}</p>
          <button onClick={handleClick}>
            <img src={meatballsIcon} alt="Menu" />
          </button>
          {isPopOverOpen && <PopOver id={id} url={url} />}
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </a>
  );
}
export default Card;
