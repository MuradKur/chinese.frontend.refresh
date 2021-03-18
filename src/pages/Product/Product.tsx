import { Checkbox, InputNumber } from 'antd';
import { FC } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';
import './Product.scss';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface IExternalProps {}

interface IProps extends IExternalProps {}

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

const data = [
  {
    preview: {
      render() {
        return (
          <img
            className="Product-preview"
            src="https://img4.okidoker.com/c/6/8/8/588738/7259859/15540373_2.jpg"
            alt="preview"
          />
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
        return <Button>Купить</Button>;
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
          <img
            className="Product-preview"
            src="https://img4.okidoker.com/c/6/8/8/588738/7259859/15540373_2.jpg"
            alt="preview"
          />
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
        return <Button>Купить</Button>;
      },
    },
    count: {
      render() {
        return <InputNumber min={1} defaultValue={1} />;
      },
    },
  },
];

const Product: FC<IProps> = () => {
  return (
    <div className="page-with-header Product container">
      <Breadcrumbs />
      <div className="Product-container pt-3 d-flex">
        <div className="Product-column--left">
          <h1 className="font-weight">Карточка продукта</h1>
          <div className="d-flex Product-card">
            <img
              className="Product-card--image"
              src="https://img4.okidoker.com/c/6/8/8/588738/7259859/15540373_2.jpg"
              alt="Product-card"
            />
            <div>
              <h3 className="mb-0 Product-card--title">PBA032 PMC</h3>
              <p className="color-gray mb-2 Product-card--subtitle">
                ФИЛЬТР МАСЛЯНЫЙ (БЕНЗИН) SANAFE NEW (МОЖНО СТАВИТЬ 2630035503)
              </p>
              <em className="Product-card--description">
                Южнокорейская компания Parts-Mall (Партс-Молл) Corporation была
                основана в конце декабря 1998 года. Компания является
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
          <Table data={data} columns={columns} />
          <h4 className="font-weight title-table mt-4">
            Наличие аналогов (заменителей) для запрошенного артикула на
            центральном складе Кореана
          </h4>
          <Table data={data} columns={columns} />
        </div>

        <div className="Product-column--right">
          <div>
            <div className="Product-solid"></div>
            <p className="Product-paragraph pt-5">
              {' '}
              <b> Производители аналогов </b>
            </p>

            <Tabs className="Product-filter" defaultActiveKey="1">
              <TabPane className="Product-filter-tabpane" tab="По цене" key="1">
                <div className="Product-checkbox--list">
                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>Metaco</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>

                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>Hola</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>

                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>BM</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>

                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>Pilenga</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>
                </div>
              </TabPane>
              <TabPane
                className="Product-filter-tabpane"
                tab="По алфавиту"
                key="2">
                <div className="Product-checkbox--list">
                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>Metaco</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>

                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>Hola</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>

                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>BM</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>

                  <div className="Product-border-contener d-flex justify-content-between">
                    <Checkbox>Pilenga</Checkbox>
                    <p className="Product-amount">161p</p>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
