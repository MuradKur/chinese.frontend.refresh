import { FC, useCallback } from 'react';
import './CarCard.scss';

export interface Model {
  id: number;
  name: string;
  brand: string;
  img: string;
}

interface IExternalProps extends Model {
  onClick?: (id: number) => void;
}

interface IProps extends IExternalProps {}

const CarCard: FC<IProps> = ({ name, img, brand, onClick, id }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [id, onClick]);

  return (
    <div onClick={handleClick} className="CarCard">
      <img src={img} alt="car card" />
      <p className="CarCard-title">
        {brand} {name}
      </p>
    </div>
  );
};

export default CarCard;
