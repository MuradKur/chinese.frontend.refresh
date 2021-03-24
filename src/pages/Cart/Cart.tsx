import React, { FC } from 'react';
import './Cart.scss';
import MakingTable from '../../components/MakingTable/MakingTable';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Cart: FC<IProps> = () => {
  return (
    <div>
      <div className="page-with-header">
        <div className="container">
          <Breadcrumbs />
          <FloatingFooter />
          <h1 className="mt-5">Корзина</h1>
          <div className="Cart-paragraph-table-block">
            <p className="Cart-room">Номер</p>
            <p className="Cart-room">Наименование</p>
            <p className="Cart-brand">Бренд</p>
            <p className="Cart-quantity">Кол-во</p>
            <p className="Cart-price">Цена</p>
            <p className="Cart-amount">Сумма</p>
          </div>
          <MakingTable />
          <div className="Cart-border-block mt-1">
            <div className="Cart-border">
              <div className=" mt-2 d-flex  align-items-center Cart-paragraph-block">
                <p className="mb-0 pr-5 ;">Тип цены:</p>
                <p className="mb-0 pl-5">Общая сумма заказа:</p>
              </div>
              <div className="d-flex  align-items-center Cart-paragraph-block">
                <p className="pr-5">
                  {' '}
                  <b>Розница -5%</b>{' '}
                </p>
                <p className="pl-2">
                  {' '}
                  <b>10760 руб.</b>{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="Cart-button-block mt-5">
            <Button className="Cart-button">ОФОРМИТЬ ЗАКАЗ</Button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Cart;
