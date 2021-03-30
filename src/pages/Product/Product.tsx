import { Checkbox, InputNumber } from 'antd';
import { FC, useCallback, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';
import './Product.scss';
import { Tabs } from 'antd';
import { useState } from 'react';
import { Drawer, Button as ButtonAntd } from 'antd';
import filter from '../../assets/filter.png';
import AddToTheBasket from '../../components/AddToTheBasket/AddToTheBasket';
import { connect } from 'react-redux';
import { addToCartProduct } from '../../actions';
// @ts-ignore
import WOW from 'wowjs';

const { TabPane } = Tabs;

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

const Product: FC<IProps> = ({ addToCartProduct }) => {
  const [isOpenMessage, setOpenMessage] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const handleOpen = useCallback(
    (id) => {
      return () => {
        const product = { title: 'nnn', id, length: 1 };
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
            const productsResult = [...productsArr, product];
            addToCartProduct(productsResult);
            localStorage.setItem('products', JSON.stringify(productsResult));
          }
        } else {
          localStorage.setItem('products', JSON.stringify([product]));
          addToCartProduct([product]);
        }
        setOpenMessage(true);
      };
    },
    [addToCartProduct],
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const data = [
    {
      preview: {
        render() {
          return (
            <>
              <ButtonAntd className="Product-button-antd" onClick={showDrawer}>
                <img
                  className="Product-preview"
                  src="https://img4.okidoker.com/c/6/8/8/588738/7259859/15540373_2.jpg"
                  alt="preview"
                />
              </ButtonAntd>
            </>
          );
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
        render() {
          return (
            <ButtonAntd className="Product-button-antd" onClick={showDrawer}>
              <img
                className="Product-preview"
                src="https://img4.okidoker.com/c/6/8/8/588738/7259859/15540373_2.jpg"
                alt="preview"
              />
            </ButtonAntd>
          );
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
    <div className="page-with-header Product">
      <div className="container pt-3">
        <Breadcrumbs />
        <div className="d-flex Product-container">
          <div className="Product-column--left">
            <Drawer
              className="Product-drawer"
              title="Hyundai / KIA · 2630035505"
              placement="right"
              closable={false}
              width={520}
              onClose={onClose}
              visible={visible}>
              <p className="Product-paragraph-drawer-p">Фильтр масляный</p>

              <Tabs defaultActiveKey="2">
                <TabPane
                  tab={
                    <span className="Product-paragraph-tab">Фотография</span>
                  }
                  key="1">
                  <div className="Product-photo-filter-border">
                    <img className="Product-photo-filter" src={filter} alt="" />
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <span className="Product-paragraph-tab">Производитель</span>
                  }
                  key="2">
                  Компания Hyundai Motor Company была основана в 1967г. В 1998
                  году Hyundai поглотила корейскую автомобилестроительную
                  компанию Kia Motors. В 2000 году заключила стратегический
                  альянс с Daimler Chrysler, существовавший несколько лет.
                  Состоящий из пяти предприятий завод Hyundai в корейском городе
                  Ульсан, по данным на 2006 год считался крупнейшим
                  автомобилестроительным заводом в мире. Использует Товарные
                  Знаки: Hyundai, Mobis, KIA.
                </TabPane>
              </Tabs>
            </Drawer>

            <h1 className="font-weight">Карточка продукта</h1>

            <div className="d-flex Product-card">
              <img
                className="Product-card--image wow fadeIn"
                src="https://img4.okidoker.com/c/6/8/8/588738/7259859/15540373_2.jpg"
                alt="Product-card"
              />

              <div>
                <h3 className="mb-0 Product-card--title">PBA032 PMC</h3>
                <p className="color-gray mb-2 Product-card--subtitle">
                  ФИЛЬТР МАСЛЯНЫЙ (БЕНЗИН) SANAFE NEW (МОЖНО СТАВИТЬ 2630035503)
                </p>
                <em className="Product-card--description">
                  Южнокорейская компания Parts-Mall (Партс-Молл) Corporation
                  была основана в конце декабря 1998 года. Компания является
                  изготовителем и экспортером расходных материалов, деталей и
                  сопутствующих материалов высокого качества на конвейеры для
                  всего модельного ряд автомобилей Hyundai, Ssang Yong, Kia, GM
                  Daewoo и Samsung Motors.
                </em>
                <a className="ml-1" href="/" target="_blank">
                  подробнее
                </a>
              </div>
            </div>

            <h4 className="font-weight title-table">
              Наличие для запрошенного артикула на центральном складе Кореана
            </h4>
            <Table className="wow slideInRight" data={data} columns={columns} />
            <h4 className="font-weight title-table mt-4">
              Наличие аналогов (заменителей) для запрошенного артикула на
              центральном складе Кореана
            </h4>
            <Table className="wow slideInLeft" data={data} columns={columns} />
          </div>

          <div className="Product-column--right">
            <div>
              <div className="Product-solid"></div>
              <p className="Product-paragraph pt-5">
                {' '}
                <b> Производители аналогов </b>
              </p>

              <Tabs className="Product-filter" defaultActiveKey="1">
                <TabPane
                  className="Product-filter-tabpane"
                  tab="По цене"
                  key="1"></TabPane>
                <TabPane
                  className="Product-filter-tabpane"
                  tab="По алфавиту"
                  key="2"></TabPane>
              </Tabs>
              <div className="Product-border-contener">
                <Checkbox>Metaco</Checkbox>
                <p className="Product-amount">161p</p>
              </div>

              <div className="Product-border-contener">
                <Checkbox>Hola</Checkbox>
                <p className="Product-amount">161p</p>
              </div>

              <div className="Product-border-contener">
                <Checkbox>BM</Checkbox>
                <p className="Product-amount">161p</p>
              </div>

              <div className="Product-border-contener">
                <Checkbox>Pilenga</Checkbox>
                <p className="Product-amount">161p</p>
              </div>
              <AddToTheBasket visible={isOpenMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(() => ({}), { addToCartProduct })(Product);
