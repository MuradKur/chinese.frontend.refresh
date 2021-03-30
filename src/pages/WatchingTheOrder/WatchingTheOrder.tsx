import React, { FC, useCallback, useEffect, useState } from 'react';
import './WatchingTheOrder.scss';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import Table from '../../components/Table/Table';
import { Button, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { addToCartProduct } from '../../actions';
// @ts-ignore
import WOW from 'wowjs';
import AddToTheBasket from '../../components/AddToTheBasket/AddToTheBasket';

interface IExternalProps {}

interface IProps extends IExternalProps {
  // TODO
  addToCartProduct: any;
}

const columns = [
  {
    key: 'preview',
    title: 'Фото',
  },
  {
    key: 'name',
    title: 'Название запчасти',
  },
  {
    key: 'brand',
    title: 'Бренд запчасти',
  },
  {
    key: 'brand_desctiprion',
    title: 'Описание бредна',
  },
  {
    key: 'count',
    title: 'Количество',
  },
  {
    key: 'buy',
  },
];

const WatchingTheOrder: FC<IProps> = ({ addToCartProduct }) => {
  const [isOpenMessage, setOpenMessage] = useState(false);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const handleOpen = useCallback(
    (id) => {
      return () => {
        const WatchingTheOrder = { title: 'nnn', id, length: 1 };
        const products = localStorage.getItem('products');

        if (products) {
          const productsArr = JSON.parse(products);
          const similarProducts = productsArr.find(
            (item: any) => item.id === id,
          );
          if (similarProducts) {
            const result = productsArr.map((item: any) => {
              if (item.id === id) {
                similarProducts.length++;
                return similarProducts;
              }
              return item;
            });
            addToCartProduct(result);

            localStorage.setItem('products', JSON.stringify(result));
          } else {
            const productsResult = [...productsArr, WatchingTheOrder];
            addToCartProduct(productsResult);
            localStorage.setItem('products', JSON.stringify(productsResult));
          }
        } else {
          localStorage.setItem('products', JSON.stringify([WatchingTheOrder]));
          addToCartProduct([WatchingTheOrder]);
        }
        setOpenMessage(true);
      };
    },
    [addToCartProduct],
  );

  const data = [
    {
      preview: {
        render() {
          return <></>;
        },
      },
      name: {
        value: 'PBA032',
      },
      brand: {
        value: 'PMC',
      },
      brand_desctiprion: {
        value: 'Какое то описание',
      },
      buy: {
        render() {
          return <Button onClick={handleOpen(1)}>Купить</Button>;
        },
      },
      count: {
        render() {
          return <InputNumber min={1} defaultValue={1} />;
        },
      },
    },
    {
      preview: {
        render() {},
      },
      name: {
        value: 'PBA032',
      },
      brand: {
        value: 'PMC',
      },
      brand_desctiprion: {
        value: 'Какое то описание',
      },
      buy: {
        render() {
          return <Button onClick={handleOpen(2)}>Купить</Button>;
        },
      },
      count: {
        render() {
          return <InputNumber min={1} defaultValue={1} />;
        },
      },
    },
  ];

  return (
    <div className="page-with-header mt-5">
      <div className="container">
        <div>
          <Breadcrumbs />
          <h1 className="mt-4">Просмотр заказа</h1>
          <p className="WatchingTheOrder-paragraph-color">
            <b> Проверьте информацию по заказу, перед его отправкой</b>
          </p>
          <p>
            {' '}
            <b> Содержимое корзины </b>
          </p>
          <Table className="wow slideInRight" data={data} columns={columns} />
          <h4 className="font-weight title-table mt-4">
            Наличие аналогов (заменителей) для запрошенного артикула на
            центральном складе Кореана
          </h4>
          <Table className="wow slideInLeft" data={data} columns={columns} />
          <AddToTheBasket visible={isOpenMessage} />
          <p className="mb-1">
            <b>Платежная информация</b>
          </p>
          <div className="WatchingTheOrder-border">
            <div className="ml-5">
              <p className="mb-3 mt-3">
                <b>Персональные данные</b>
              </p>
              <p className="mb-0">
                <b>Фамилия</b>: Test
              </p>
              <p className="mb-0">
                <b>Имя</b>: Test
              </p>
              <p className="mb-0">
                <b>Отчество</b>: Test
              </p>
              <p className="mb-0">
                <b>Телефон</b>: +7(921)111-11-11
              </p>
              <p className="mb-0">
                <b>Email</b>: @gmail.com
              </p>
              <p>
                <b>Город</b>: Санкт-Петербург
              </p>
            </div>
            <div className="WatchingTheOrder-block">
              <p className="mb-3 mt-3">
                <b>Информация об автомобиле</b>
              </p>
              <p>
                <b>Объем двигателя</b>: 1.4 Turbo
              </p>
            </div>
          </div>
          <p className="mb-1 mt-5">
            <b>Информация о доставке</b>
          </p>
          <div className="WatchingTheOrder-border">
            <div className="ml-5">
              <p className="mb-0 mt-3">
                <b>Способ доставки</b>: На вынос
              </p>
              <p className="mb-0">
                <b>Наименование магазина</b>: Рыбацкое
              </p>
              <p className="mb-0 pb-3">
                <b>Адрес, телефон</b>: Шлиссельбургский пр., д.17,лит.Б, тел.:
                (812) 640-43-33{' '}
              </p>
            </div>
          </div>
          <Footer />
          <FloatingFooter />
        </div>
      </div>
    </div>
  );
};

export default connect(() => ({}), { addToCartProduct })(WatchingTheOrder);
