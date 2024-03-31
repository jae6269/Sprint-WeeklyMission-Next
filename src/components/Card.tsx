import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/card.module.css';
import NoneImg from '@/public/svgs/noneImg.svg';
import StarIcon from '@/public/svgs/starIcon.svg';
import MeatballsIcon from '@/public/svgs/meatballsIcon.svg';
import PopOver from '@/src/components/PopOver';
import { ClickFunctionType } from '@/src/types/functionsType';
import { CardDataType } from '../types/interfaces/fetchDatas';

interface CardProps extends CardDataType {
  date: any;
  time: any;
}

function Card({
  id,
  time,
  imgUrl = NoneImg,
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
    <Link className={styles.card} href={url} target="_blank" rel="noreferrer">
      <div className={styles.cardImg}>
        <img className={styles.cardBackground} src={imgUrl} alt={title} />
        <StarIcon className={styles.starIcon} alt="Favorites" />
      </div>

      <div className={styles.texts}>
        <div className={styles.time}>
          <p>{time}</p>
          <button onClick={handleClick}>
            <MeatballsIcon alt="Menu" />
          </button>
          {isPopOverOpen && <PopOver id={id} url={url} />}
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  );
}
export default Card;
