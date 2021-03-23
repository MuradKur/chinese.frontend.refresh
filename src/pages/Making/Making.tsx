import React, { FC, useEffect } from 'react';
import Button from '../../components/Button/Button';
import './Making.scss';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
// @ts-ignore
import WOW from 'wowjs';
import Warning from '../../components/Warning/Warning';
import MakingTable from '../../components/MakingTable/MakingTable';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Making: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="page-with-header">
      <div className="container">
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

        <Warning>
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
        <div className="Making-paragraph-table-block">
          <p className="Making-room">Номер</p>
          <p className="Making-room">Наименование</p>
          <p className="Making-brand">Бренд</p>
          <p className="Making-quantity">Кол-во</p>
          <p className="Making-price">Цена</p>
          <p className="Making-amount">Сумма</p>
        </div>
        <MakingTable />

        <div className="Making-border ">
          <h2 className="Making-title-h2 mb-3">УЧЕТНАЯ ЗАПИСЬ НА САЙТЕ</h2>
          <div className="Making-contener">
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Email-адрес</p>
                <p className="Making-asterisk pr-4">*</p>
              </div>
              <input className="Making-input" type="text" />
            </div>
          </div>
        </div>

        <div className="Making-border">
          <h2 className="Making-title-h2">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h2>

          <p className="pl-4 pt-4">
            {' '}
            <b>Город:</b>{' '}
            <a href="/">
              {' '}
              <b> Санкт-Петербург</b>
            </a>{' '}
          </p>
          <div className="Making-contener">
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Фамилия</p>
                <p className="Making-asterisk pr-4">*</p>
              </div>
              <input className="Making-input" type="text" />
            </div>

            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1">Имя</p>
                <p className="Making-asterisk pr-4">* </p>
              </div>
              <input className="Making-input Making-input-pl " type="text" />
            </div>
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Отчество</p>
                <p className="Making-asterisk pr-4">*</p>
              </div>
              <input className="Making-input" type="text" />
            </div>
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Телефон</p>
                <p className="Making-asterisk pr-5">*</p>
              </div>
              <input className="Making-input" type="text" />
            </div>
          </div>

          <p>
            {' '}
            <a className="Making-show-information ml-3 mb-5" href="/">
              Показать информацию об автомобиле
            </a>{' '}
          </p>
        </div>

        <div className="Making-border">
          <h2 className="Making-title-h2">СПОСОБ ПОЛУЧЕНИЯ</h2>

          <p className="mb-0 mt-3 pl-5">Курьером до адреса по СПб: 0 руб.</p>
          <p className="mt-0 mb-5 pl-5">На вынос: 0 руб.</p>
          <div className="Making-contener">
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Почтовый индекс</p>
              </div>
              <input className="Making-input" type="text" />
            </div>

            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1">Улица</p>
                <p className="Making-asterisk pr-4">* </p>
              </div>
              <input
                className="Making-input Making-input-street-pl "
                type="text"
              />
            </div>
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Дом</p>
                <p className="Making-asterisk pr-4">*</p>
              </div>
              <input
                className="Making-input Making-input-house-pl"
                type="text"
              />
            </div>
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Корпус</p>
              </div>
              <input
                className="Making-input  Making-input-housing-pl"
                type="text"
              />
            </div>
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Квартира</p>
              </div>
              <input
                className="Making-input Making-input-apartment-pl"
                type="text"
              />
            </div>
            <div className="Making-input-paragraph">
              <div className="Making-paragraph-block">
                <p className=" pr-1 Making-paragraph-email">Время доставки</p>
              </div>
              <input className="Making-input ml-2" type="text" />
            </div>
            <p className="pl-4 mt-3">
              При заказе товара на сумму более 2000 рублей доставка
              осуществляется БЕСПЛАТНО. При заказе на сумму менее 2000 рублей
              стоимость доставки составит 300 рублей.
            </p>
          </div>

          <p>
            {' '}
            <a className="Making-show-information ml-3 mb-5" href="/">
              Подробнее о доставке товара.
            </a>{' '}
          </p>
        </div>

        <Button className="Making-button-checkout">ОФОРМИТЬ ЗАКАЗ</Button>
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
