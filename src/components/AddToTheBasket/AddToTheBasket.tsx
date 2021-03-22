import React, { FC } from 'react';
import './AddToTheBasket.scss';
import Button from '../../components/Button/Button';
import Pads from '../../assets/Pads.webp';

interface IExternalProps {
  visible: boolean;
}

interface IProps extends IExternalProps {}

const AddToTheBasket: FC<IProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="AddToTheBasket-border">
      <div>
        <p className="AddToTheBasket-paragraph pt-3">Товар в корзине</p>
      </div>
      <div className="AddToTheBasket-block">
        <img className="AddToTheBasket-pads" src={Pads} alt="" />
        <div>
          <Button className="AddToTheBasket-button-go">
            <p className="AddToTheBasket-paragraph">Перейти</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddToTheBasket;
