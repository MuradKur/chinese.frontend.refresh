import { FC } from 'react';
import './CarCard.scss';

interface IExternalProps {
  id: number;
  image: any;
  title: string;
}

interface IProps extends IExternalProps {}

const CarCard: FC<IProps> = ({ title, image }) => {
  return (
    <div className="CarCard">
      <img src={image} alt="car card" />
      <p className="CarCard-title">{title}</p>
    </div>
  );
};

export default CarCard;
