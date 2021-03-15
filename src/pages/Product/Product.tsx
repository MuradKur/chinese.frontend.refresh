import { InputNumber } from 'antd';
import { FC } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';
import './Product.scss';

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
    <div className="page-with-header">
      <div className="container pt-3 d-flex">
        <div className="Product-column--left">
          <Breadcrumbs />
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
        <div className="Product-column--right">здесь колонка</div>
      </div>
    </div>
  );
};

export default Product;
