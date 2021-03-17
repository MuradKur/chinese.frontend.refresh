import { FC } from 'react';
import { Card, CardProps } from 'antd';
import { AiFillWarning } from 'react-icons/ai';
import { COLORS } from '../../constants';

interface IExternalProps {}

interface IProps extends IExternalProps, CardProps {}

const Warning: FC<IProps> = ({ children, ...restProps }) => {
  return (
    <Card {...restProps}>
      <div className="d-flex wow fadeIn align-items-center">
        <div>
          <AiFillWarning size={50} color={COLORS.red} className="mr-4" />
        </div>
        <div>{children}</div>
      </div>
    </Card>
  );
};

export default Warning;
