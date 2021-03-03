/* eslint-disable jsx-a11y/no-distracting-elements */
import { FC } from 'react';
import './Promotions.scss';

interface IExternalProps {
  title: string;
}

interface IProps extends IExternalProps {}

const Promotions: FC<IProps> = ({ title }) => {
  return (
    <div className="Promotions-border">
      <div className="Promotions-item">{title}</div>
    </div>
  );
};

export default Promotions;
