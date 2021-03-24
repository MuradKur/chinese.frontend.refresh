import { FC } from 'react';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Cart: FC<IProps> = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
};

export default Cart;
