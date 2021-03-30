import { FC } from 'react';
import './SuccessfulOrder.scss';
import { COLORS } from '../../constants';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import { VscSmiley } from 'react-icons/vsc';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const SuccessfulOrder: FC<IProps> = () => {
  return (
    <div className="page-with-header mt-5">
      <div className="container">
        <div className="SuccessfulOrder-border">
          <div className="SuccessfulOrder-flex-block">
            <h1 className="SuccessfulOrder-title mt-4">
              ЗАКАЗ ПРИНЯТ В ОБРАБОТКУ
            </h1>
          </div>
          <p className="SuccessfulOrder-flex-block SuccessfulOrder-paragraph-pb">
            Номер заказа:{' '}
            <b className="pl-1 SuccessfulOrder-change-of-color">363914</b>{' '}
          </p>
          <p className="SuccessfulOrder-flex-block SuccessfulOrder-paragraph-pt">
            Сумма: <b className="pl-1"> 1560 руб.</b>
          </p>
          <p className="SuccessfulOrder-flex-block">
            Для уточнения деталей заказа и сроков его получения вами <br />{' '}
            свяжется менеджер магазина (в часы работы магазина)
          </p>
          <p className="SuccessfulOrder-flex-block SuccessfulOrder-paragraph-pb">
            Пунктом выдачи товара выбран магазин 'Кореана':
          </p>
          <p className="SuccessfulOrder-flex-block  SuccessfulOrder-paragraph-pt">
            {' '}
            <b> Санкт-Петербург, Шлиссельбургский пр., д.17,лит.Б </b>{' '}
          </p>
          <p className="SuccessfulOrder-flex-block SuccessfulOrder-paragraph-pb">
            Узнать о статусе заказа вы можете по телефону:
          </p>
          <a
            className="SuccessfulOrder-flex-block SuccessfulOrder-paragraph-pt SuccessfulOrder-link"
            href="/">
            {' '}
            <b>+7(812)640-43-33</b>{' '}
          </a>
          <p className="SuccessfulOrder-flex-block mt-2 SuccessfulOrder-paragraph-pb">
            Режим работы магазина:
          </p>
          <p className="SuccessfulOrder-flex-block SuccessfulOrder-paragraph-pb">
            <b>пн-сб: 10:00-20:00</b>
          </p>
          <p className="SuccessfulOrder-flex-block SuccessfulOrder-paragraph-pt">
            <b>вс: 10:00-18:00</b>
          </p>
          <a
            className="SuccessfulOrder-flex-block SuccessfulOrder-link"
            href="/">
            {' '}
            <b> Вернутся на главную страницу</b>
          </a>
          <div className="SuccessfulOrder-flex-block mt-4 mb-4">
            <VscSmiley color={COLORS.yellow} size={80} />
          </div>
        </div>

        <FloatingFooter />
        <Footer />
      </div>
    </div>
  );
};

export default SuccessfulOrder;
