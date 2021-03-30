import { FC, useCallback, useEffect } from 'react';
import { InputNumber } from 'antd';
import './CartProduct.scss';
import Button from '../Button/Button';
import { COLORS } from '../../constants';
import { BiBasket } from 'react-icons/bi';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {
  id: number;
  onDelete?: (id: number) => void;
  length?: number;
  onChangeQuantity?: (id: number, value: number) => void;
}

const CartProduct: FC<IProps> = ({
  id,
  onDelete,
  length,
  onChangeQuantity,
}) => {
  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(id);
    }
  }, [id, onDelete]);

  const handleChangeQuantity = (num: number) => {
    if (onChangeQuantity) {
      onChangeQuantity(id, num);
    }
  };

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="CartProduct wow slideInLeft">
      <p className="CartProduct-title">Доставит Яндекс.Маркет через 2 дня</p>
      <div className="d-flex align-items-center">
        <div className="CartProduct-content">
          <div className="d-flex CartProduct-preview">
            <img
              className="CartProduct-image"
              src="https://img.pngio.com/purple-flower-png-clip-art-image-gallery-yopriceville-high-purple-flower-clipart-5000_4619.png"
              alt="product cart"
            />
            <p className="mb-0 CartProduct-description mr-2 ml-2">
              Колодки тормозные передние Acc/Pony/Lantra1,5/Av/Verna/Getz
              Колодки тормозные передние Acc/Pony/Lantra1,5/Av/Verna/Getz
            </p>
          </div>
          <div className="d-flex CartProduct-price">
            <InputNumber
              onChange={handleChangeQuantity}
              min={1}
              max={100}
              value={Number(length)}
            />
            <b className="ml-4">{14000 * Number(length)} р</b>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Button bgColor={COLORS.transparent} onClick={handleDelete}>
          <BiBasket color={COLORS.red} size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
