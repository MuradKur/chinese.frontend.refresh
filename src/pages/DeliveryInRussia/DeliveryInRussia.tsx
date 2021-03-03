import { FC, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './DeliveryInRussia.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import { COLORS } from '../../constants';
import bonus from '../../assets/bonus.png';
import besplatnaya_dostavka from '../../assets/besplatnaya_dostavka.jpg';
import besplatnaya_dostavka_rf from '../../assets/besplatnaya_dostavka_rf.jpg';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const DeliveryInRussia: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="page-with-header">
      <div className="container">
        <div>
          <div className="DeliveryInRussia-breadcrumbs-title">
            <div className="DeliveryInRussia-block">
              <Breadcrumbs />
            </div>
            <h1 className="DeliveryInRussia-title">
              Оптовым клиентам всех регионов Российской Федерации
            </h1>
          </div>
          <div className="DeliveryInRussia-leftSidebar-title">
            <div className="DeliveryInRussia-leftSidebar">
              <LeftSideBar />
            </div>

            <div className="DeliveryInRussia-title-block">
              <h2 className="DeliveryInRussia-title-h2">
                Координаты оптового отдела по работе со всеми регионами России:
              </h2>

              <p className="DeliveryInRussia-paragraph">
                Санкт-Петербург, Октябрьская набережная д.104 корп.43 лит А и Ж
              </p>

              <p className="DeliveryInRussia-paragraph">
                {' '}
                <a href="tel:+78126350862">+7(812) 635-08-62</a>
              </p>

              <p className="DeliveryInRussia-paragraph">
                е-mail:{' '}
                <a
                  className="DeliveryInRussia-link"
                  href="mailto:region1@koreana.spb.ru">
                  region1@koreana.spb.ru
                </a>{' '}
                ,{' '}
                <a
                  className="DeliveryInRussia-link"
                  href="mailto:region2@koreana.spb.ru">
                  region2@koreana.spb.ru
                </a>{' '}
                ,{' '}
                <a
                  className="DeliveryInRussia-link"
                  href="mailto:region3@koreana.spb.ru">
                  region3@koreana.spb.ru
                </a>{' '}
              </p>

              <h3 className="DeliveryInRussia-title-opening-hours">
                {' '}
                Часы работы:{' '}
              </h3>

              <div className="DeliveryInRussia-paragraph">
                <p>
                  Пн-пт с 9 00 до 18 00 <br />
                  Сб с 9 00 до 17 00 <br />
                  Вс - выходной
                </p>
              </div>

              <p className="DeliveryInRussia-paragraph">
                {' '}
                <a className="DeliveryInRussia-link-download" href="/">
                  Скачать прайс лист
                </a>{' '}
                (требуется логин и пароль для оптовых клиентов)
              </p>

              <p
                className="DeliveryInRussia-paragraph-attention"
                style={{ color: COLORS.red }}>
                {' '}
                ВНИМАНИЕ! Для получения логина и пароля необходимо связаться с
                оптовым отделом по телефону или электронной почте.
              </p>

              <p className="DeliveryInRussia-paragraph">
                Компания «Кореана» с 2001 года осуществляет оптовые поставки
                запасных частей по всем регионам Российской федерации. Вам
                необходимо сделать выгодную оптовую закупку автомобильных
                запчастей корейского производства, для того чтобы Ваш бизнес мог
                процветать и развиваться, радуя Вас и Ваших заказчиков? Но Вы не
                являетесь жителем Москвы, или Санкт-Петербурга и работаете на
                рынке других городов Российской Федерации?.. Предлагая оптовую
                реализацию запасных элементов для самых востребованных корейских
                автомобилей, мы с радостью поможем Вам сделать выгодный
                оперативный заказ.
              </p>

              <h4 className="DeliveryInRussia-title-h2">
                Доставка по России – быстро и бесплатно!
              </h4>

              <p className="DeliveryInRussia-paragraph">
                Для того чтобы Ваш заказ не заставил себя долго ждать,
                притормаживая качественное развитие Вашего дела, мы сделаем все
                зависящее от нас, чтобы Вы оперативно получили свой товар.
                Доставка по регионам осуществляется различными транспортными
                компаниями, такими как ПЭК, Байкал, УТС и другими, по
                согласованию с покупателем.
              </p>

              <div
                className="  wow slideInRight  DeliveryInRussia-paragraph-div "
                data-wow-duration="2s">
                <div className="DeliveryInRussia-border">
                  <img className="DeliveryInRussia-icon" src={bonus} alt="" />
                  <h4 className="DeliveryInRussia-title-h2">
                    Для наших оптовых клиентов, мы осуществляем бесплатную
                    доставку по России при сумме заказа от 10 000 рублей.
                  </h4>
                </div>
              </div>

              <p className="DeliveryInRussia-paragraph-p">
                Наши региональные отделы успешно реализуют продукцию на
                максимально выгодных для Вас условиях. «Кореана» занимается
                поставкой запчастей для таких брендов, как:
              </p>

              <div className="DeliveryInRussia-paragraph-block">
                <ul>
                  <li className="DeliveryInRussia-li">
                    {' '}
                    Знаменитые и распространенные в России{' '}
                    <a className="DeliveryInRussia-link" href="/">
                      Hyundai
                    </a>{' '}
                    ,{' '}
                    <a className="DeliveryInRussia-link" href="/">
                      {' '}
                      Chevrolet
                    </a>
                    ,{' '}
                    <a className="DeliveryInRussia-link" href="/">
                      KIA
                    </a>{' '}
                    KIA;
                  </li>
                  <li className="DeliveryInRussia-li">
                    Не менее популярные{' '}
                    <a className="DeliveryInRussia-link" href="/">
                      Ssang Yong
                    </a>{' '}
                    и{' '}
                    <a className="DeliveryInRussia-link" href="/">
                      Daewoo…
                    </a>{' '}
                  </li>
                  <li className="DeliveryInRussia-li">
                    Также по Вашему запросу мы предоставим запасные элементы для
                    более редких моделей «корейцев».
                  </li>
                </ul>
              </div>

              <div className=" DeliveryInRussia-besplatnaya_dostavka-div">
                <img
                  className=" wow zoomIn DeliveryInRussia-besplatnaya_dostavka"
                  src={besplatnaya_dostavka}
                  alt=""
                />
                <img
                  className=" wow zoomIn DeliveryInRussia-besplatnaya_dostavka"
                  src={besplatnaya_dostavka_rf}
                  alt=""
                />
              </div>

              <div className="DeliveryInRussia-paragraph">
                <em className="DeliveryInRussia-em">Нам доверяют в России</em>
              </div>

              <p className="DeliveryInRussia-paragraph">
                За годы работы в своем сегменте рынка, мы заслужили уважение
                таких городов России, как:
              </p>

              <div className="DeliveryInRussia-paragraph-block">
                <ul>
                  <li className="DeliveryInRussia-li">
                    Екатеринбург, Мурманск, Пермь;
                  </li>
                  <li className="DeliveryInRussia-li">
                    Киров, Нижний Новгород, Краснодар, Ростов, Омск, Томск, Уфа;
                  </li>
                  <li className="DeliveryInRussia-li">
                    и многих других городов-партнеров, которые уже давно
                    работают с нами. Присоединяйтесь и Вы к нашему <p></p>{' '}
                    профессиональному содружеству, знающему свой сегмент бизнеса
                    на высоком уровне!
                  </li>
                </ul>
              </div>

              <p className="DeliveryInRussia-last-paragraph">
                Специальные скидки, которые мы предлагаем своим оптовым
                покупателям – сделают Вашу покупку еще более выгодной и{' '}
                рациональной для Вас, ведь специальная система скидок предлагает
                Вам хорошие бонусы, по специальной акционной системе. Подробнее
                узнать о ней можно, обратившись к нашим региональным
                консультантам, которые всегда с радостью ответят на все Ваши
                вопросы.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default DeliveryInRussia;
