import { FC, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Details from '../../shablons/Details/Details';
import './GuaranteePage.scss';
import { COLORS } from '../../constants';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const GuaranteePage: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Details>
        <div>
          <b className="GuaranteePage-paragraph-b">
            Дорогие клиенты! Используйте сервисную книжку компании "Кореана" и
            получайте ряд привилегий при прохождении планового ТО!
          </b>
          <h1 className="GuaranteePage-title-h1 mt-3 mb-3">
            ПРЕИМУЩЕСТВА ИСПОЛЬЗОВАНИЯ СЕРВИСНОЙ КНИЖКИ:
          </h1>
          <div className="pl-2 wow fadeIn">
            <ul>
              <li className="GuaranteePage-ul">
                {' '}
                <a className="GuaranteePage-link" href="/">
                  Расширенная гарантия
                </a>{' '}
                <span className="GuaranteePage-span">
                  {' '}
                  на сервис и запчасти при регулярном прохождении планового ТО.
                </span>
              </li>
            </ul>
            <ul>
              <li className="GuaranteePage-ul">
                {' '}
                <span className="GuaranteePage-span">
                  {' '}
                  Контроль времени прохождения планового ТО.
                </span>
              </li>
            </ul>
            <ul>
              <li className="GuaranteePage-ul">
                {' '}
                <span className="GuaranteePage-span">
                  {' '}
                  Полная история эксплуатации автомобиля при продаже станет
                  положительным фактором для нового владельца и позволит
                  совершить выгодную сделку.
                </span>
              </li>
            </ul>
            <ul>
              <li className="GuaranteePage-ul">
                {' '}
                <span className="GuaranteePage-span">
                  {' '}
                  Возможность реализации автомобиля через сеть продаж
                  автомобилей с пробегом компании "Кореана" на выгодных
                  условиях.
                </span>
              </li>
            </ul>
          </div>
          <div className="GuaranteePage-entry-to-those-service-block wow fadeIn">
            <Button className="GuaranteePage-entry-to-those-service  mb-5 mt-5">
              ЗАПИСЬ НА ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ
            </Button>
          </div>
          <b>
            Сервисная книжка оформляется бесплатно при условии прохождения
            планового ТО.
          </b>
          <p className="mb-4">
            Благодарим Вас за выбор и решение обслуживать транспортное средство
            в сети технических сервисов нашей компании!
          </p>

          <iframe
            className="GuaranteePage-iframe wow slideInRight"
            title="iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/POfEa0kIxog"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

          <div className="GuaranteePage-border">
            <h2 className="GuaranteePage-title-h2">
              НУЖНА ПОМОЩЬ? ПЕРЕЗВОНИМ!
            </h2>

            <p className="GuaranteePage-paragraph">
              Оставьте номер телефона и наш технический специалист свяжется с
              вами и поможет с записью
            </p>

            <div className="GuaranteePage-input-button-block-padding">
              <div className="GuaranteePage-input-button-block">
                <input className="GuaranteePage-input" type="text" />
                <Button
                  bgColor={COLORS.black}
                  className="GuaranteePage-send-button">
                  ОТПРАВИТЬ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Details>
      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default GuaranteePage;
