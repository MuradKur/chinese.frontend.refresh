import { FC, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar, {
  IMenuItem,
} from '../../components/LeftSideBar/LeftSideBar';
import Button from '../../components/Button/Button';
// @ts-ignore
import WOW from 'wowjs';
import newPreview from '../../assets/Poprobui370x370.jpg';
import pereezd_p from '../../assets/pereezd_p.jpg';
import './Details.scss';

interface IExternalProps {
  hideSearch?: boolean;
  title?: string;
  menu?: Array<IMenuItem>;
  submenu?: Array<IMenuItem>;
}

interface IProps extends IExternalProps {}

const Details: FC<IProps> = ({
  title,
  hideSearch,
  children,
  menu,
  submenu,
}) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="page-with-header Details">
      <div className="container">
        <div className="Details-container">
          <div>
            <Breadcrumbs />
          </div>
          <h1 className="Details-title">{title}</h1>
          {!hideSearch && (
            <div className="CarService-border-block">
              <input
                placeholder="Введите название СТО"
                className="CarService-search--input"
              />
              <Button className="CarService-search--button">Поиск</Button>
            </div>
          )}
          <section className="d-flex Details-section align-items-start">
            <div className="Details-block--left">
              <div className="mb-5">
                <LeftSideBar menu={menu} />
              </div>
              <div className="mb-5">
                <LeftSideBar menu={submenu} />
              </div>
              <div className="Details-price--block">
                <h3 className="Details-news--title">НОВОСТИ АВТОСЕРВИСА</h3>
                <a href="/actions">
                  <div className="Details-news--block">
                    <img
                      alt="details"
                      className="news preview Details-news--image w-100 mb-2"
                      src={newPreview}
                    />
                    <h3 className="Details-news--label">
                      СПЕЦПРЕДЛОЖЕНИЕ ДЛЯ НОВЫХ КЛИЕНТОВ "ПОПРОБУЙ".
                    </h3>
                    <p className="Details-news--date">13.01.2021</p>
                    <p className="Details-news--content">
                      Если Вы ещё не являетесь нашим клиентом, то воспользуйтесь
                      нашим спецпредложением «ПОПРОБУЙ»! Ваша выгода – скидка
                      15% на услуги сервиса. Запишитесь на сервис прямо сейчас
                      Скидка не суммируется с дисконтной программой и другими
                      акциями нашей компании.
                    </p>
                  </div>
                </a>
                <a href="/actions">
                  <div className="Details-news--block">
                    <img
                      alt="details"
                      className="news preview Details-news--image w-100 mb-2"
                      src={pereezd_p}
                    />
                    <h3 className="Details-news--label">
                      ВНИМАНИЕ ВАЖНАЯ ИНФОРМАЦИЯ!
                    </h3>
                    <p className="Details-news--date">11.01.2021</p>
                    <p className="Details-news--content">
                      Уважаемые клиенты! СТО и магазин располагавшиеся по
                      адресу: Полевая Сабировская 49 - переехали! С 27 января
                      2021 года ждём Вас по новому адресу: Богатырский пр.,
                      д.14, к.2. ( 2-й этаж) Записаться на СТО{' '}
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="Details-block--right">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
