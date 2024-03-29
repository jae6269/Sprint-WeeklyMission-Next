import { useState } from 'react';
import '@/styles/components-styles/card.css';
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
    <a className="card" key={id} href={url} target="_blank" rel="noreferrer">
      <div className="card__img">
        <img className="card__img--background" src={imgUrl} alt={title}></img>
        <img className="card__img--star-icon" src={starIcon} alt="Favorites" />
      </div>

      <div className="card__texts">
        <div className="card__texts--time">
          <p>{time}</p>
          <button onClick={handleClick}>
            <img src={meatballsIcon} alt="Menu" />
          </button>
          {isPopOverOpen && <PopOver id={id} url={url} />}
        </div>
        <p className="card__texts--description">{description}</p>
        <p className="card__texts--date">{date}</p>
      </div>
    </a>
  );
}
export default Card;
