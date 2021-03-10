import { FC, useCallback } from 'react';
import './CarCard.scss';

interface IExternalProps {
  id: number;
  image: any;
  title: string;
  onClick?: (id: number) => void;
}

interface IProps extends IExternalProps {}

const CarCard: FC<IProps> = ({ title, image, onClick, id }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [id, onClick]);

  return (
    <div onClick={handleClick} className="CarCard">
      <img src={image} alt="car card" />
      <p className="CarCard-title">{title}</p>
    </div>
  );
};

export default CarCard;
