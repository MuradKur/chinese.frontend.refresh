import { FC } from 'react';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Making: FC<IProps> = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
};

export default Making;
