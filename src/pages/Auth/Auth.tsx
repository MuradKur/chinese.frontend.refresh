import { FC } from 'react';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Auth: FC<IProps> = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
};

export default Auth;
