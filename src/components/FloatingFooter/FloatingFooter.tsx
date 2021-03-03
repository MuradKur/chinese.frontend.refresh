import { FC } from 'react';
import './FloatingFooter.scss';
import Button from '../../components/Button/Button';
import { COLORS } from '../../constants';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const FloatingFooter: FC<IProps> = () => {
  return (
    <div className="FloatingFooter-block">
      <Button
        bgColor={COLORS.red}
        color={COLORS.orange}
        className="FloatingFooter-button FloatingFooter-button-bell">
        Заказать звонок
      </Button>
      <Button
        bgColor={COLORS.orange}
        color={COLORS.red}
        className="FloatingFooter-button FloatingFooter-button-service">
        Запись на сервис
      </Button>
      <Button
        bgColor={COLORS.red}
        color={COLORS.orange}
        className="FloatingFooter-button FloatingFooter-button-application">
        Заявка на подбор запчастей
      </Button>
    </div>
  );
};

export default FloatingFooter;
