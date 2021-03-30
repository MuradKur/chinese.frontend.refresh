import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../../components/Button/Button';
import './Making.scss';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
// @ts-ignore
import WOW from 'wowjs';
import Warning from '../../components/Warning/Warning';
import MakingTable from '../../components/MakingTable/MakingTable';
import { Input, Radio, Spin } from 'antd';
import { getCookie } from '../../services/cookie';
import Map from '../../components/Map/Map';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from '../../graph/queries/contacts';
import { ContactType } from '../../typings/graphql';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Making: FC<IProps> = () => {
  const { data: contacts, loading } = useQuery(GET_CONTACTS);
  const [radioValue, setRadioValue] = useState(2);

  const onChange = useCallback((e) => {
    setRadioValue(e.target.value);
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const city = useMemo(() => {
    let city = getCookie('region');

    if (city) {
      return JSON.parse(city);
    }

    return null;
  }, []);

  const getCoordinates = useCallback(() => {
    if (contacts && contacts.contacts.length) {
      return contacts.contacts.map((item: ContactType) => {
        return item.coordinates.split(',');
      });
    }

    return [];
  }, [contacts]);

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const coordinates = getCoordinates();

  return (
    <div className="page-with-header">
      <div className="container pt-5">
        <Breadcrumbs />
        <FloatingFooter />
        <Warning className="mt-5">
          <div className="break-all">
            <p className="Making-paragraph-warning">
              {' '}
              <b> Внимание! </b>
            </p>
            <p>
              Что бы видеть цену со скидкой согласно вашей скидочной карте,
              авторизуйтесь или зарегистрируйтесь на сайте.
            </p>
          </div>
        </Warning>

        <h1 className="mt-3 Making-title-h1">Оформление заказа</h1>

        <Warning className="mb-5">
          <div className="break-all">
            <p className="Making-paragraph-warning">
              <b>Уважаемый клиент!</b>
            </p>
            <p>
              Вам доступна доставка только курьером по Санкт-Петербургу, т.к. в
              вашем заказе имеются товары, заказанные на дополнительных складах.
            </p>
          </div>
        </Warning>
        <MakingTable />

        <div className="Making-border">
          <h3 className="Making-title-h2 mb-2">УЧЕТНАЯ ЗАПИСЬ НА САЙТЕ</h3>
          <div className="wow fadeIn">
            <div>
              <div className="mb-1">
                <label>Email-адрес</label>
              </div>
              <Input className="Making-input" type="text" />
            </div>
          </div>
        </div>

        <div className="Making-border">
          <h2 className="Making-title-h2">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h2>

          <p className="pt-4">
            {' '}
            <b>Город:</b>{' '}
            <a href="/">
              {' '}
              <b> {city?.name || 'Санкт-Петербург'}</b>
            </a>{' '}
          </p>
          <div>
            <div className="d-flex flex-wrap">
              <div className="mb-3 mr-5 wow fadeIn">
                <div className="mb-1">
                  <label>Фамилия</label>
                </div>
                <Input
                  placeholder="Фамилия"
                  className="Making-input"
                  type="text"
                />
              </div>

              <div className="mb-3 wow fadeIn">
                <div className="mb-1">
                  <label>Имя</label>
                </div>
                <Input placeholder="Имя" className="Making-input" type="text" />
              </div>
            </div>

            <div className="d-flex flex-wrap">
              <div className="mb-3 mr-5 wow fadeIn">
                <div className="mb-1">
                  <label>Отчество</label>
                </div>
                <Input
                  placeholder="Отчество"
                  className="Making-input"
                  type="text"
                />
              </div>

              <div className="mb-3 wow fadeIn">
                <div className="mb-1">
                  <label>Телефон</label>
                </div>
                <Input
                  placeholder="Телефон"
                  className="Making-input"
                  type="text"
                />
              </div>
            </div>
          </div>

          <p>
            {' '}
            <a className="Making-show-information" href="/">
              Показать информацию об автомобиле
            </a>{' '}
          </p>
        </div>

        <div className="Making-border">
          <h2 className="Making-title-h2">СПОСОБ ПОЛУЧЕНИЯ</h2>

          <p className="mb-0 mt-3">Курьером до адреса по СПб: 0 руб.</p>
          <p className="mt-0 mb-5">На вынос: 0 руб.</p>

          <div className="d-flex flex-wrap">
            <div className="mb-3 mr-5 wow fadeIn">
              <div className="mb-1">
                <label>Почтовый индекс</label>
              </div>
              <Input
                placeholder="Почтовый индекс"
                className="Making-input"
                type="text"
              />
            </div>

            <div className="mb-3 wow fadeIn">
              <div className="mb-1">
                <label>Улица</label>
              </div>
              <Input placeholder="Улица" className="Making-input" type="text" />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            <div className="mb-3 mr-5 wow fadeIn">
              <div className="mb-1">
                <label>Дом</label>
              </div>
              <Input placeholder="Дом" className="Making-input" type="text" />
            </div>

            <div className="mb-3">
              <div className="mb-1">
                <label>Корпус</label>
              </div>
              <Input
                placeholder="Корпус"
                className="Making-input"
                type="text"
              />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            <div className="mb-3 mr-5 wow fadeIn">
              <div className="mb-1">
                <label>Квартира</label>
              </div>
              <Input
                placeholder="Квартира"
                className="Making-input"
                type="text"
              />
            </div>

            <div className="mb-3 wow fadeIn">
              <div className="mb-1">
                <label>Время доставки</label>
              </div>
              <Input
                placeholder="Время доставки"
                className="Making-input"
                type="text"
              />
            </div>
          </div>

          <p className="mt-3">
            При заказе товара на сумму более 2000 рублей доставка осуществляется
            БЕСПЛАТНО. При заказе на сумму менее 2000 рублей стоимость доставки
            составит 300 рублей.
          </p>
          <p>
            {' '}
            <a className="Making-show-information mb-5" href="/">
              Подробнее о доставке товара.
            </a>{' '}
          </p>
        </div>

        <div className="Making-border pt-2">
          <Radio.Group onChange={onChange} value={radioValue}>
            <Radio style={radioStyle} value={1}>
              Курьер до адреса по СПБ. 300 руб.
            </Radio>
            <Radio style={radioStyle} value={2}>
              На вынос: 0 руб.
            </Radio>
          </Radio.Group>
          <Spin spinning={loading}>
            <Map
              defaultState={{ center: coordinates[0], zoom: 5 }}
              coordinates={coordinates}
              className="Making-map mt-2"
            />
          </Spin>
        </div>

        <Button className="Making-button-checkout mt-4 mb-3">
          ОФОРМИТЬ ЗАКАЗ
        </Button>
        <p>
          Нажимая на кнопку «Оформить заказ», вы даете{' '}
          <a className="Making-show-information ml-3 mb-5" href="/">
            {' '}
            согласие на обработку своих персональных данных.
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Making;
