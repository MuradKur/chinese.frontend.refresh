import { FC } from 'react';
import './AddToTheBasket.scss';
import Button from '../../components/Button/Button';
import Pads from '../../assets/Pads.webp';

interface IExternalProps {
  visible: boolean;
  onPress?: () => void;
}

interface IProps extends IExternalProps {}

const AddToTheBasket: FC<IProps> = ({ visible, onPress }) => {
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
          <Button onClick={onPress} className="AddToTheBasket-button-go">
            <p className="AddToTheBasket-paragraph">Перейти</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddToTheBasket;
