import { FC } from 'react';
import { Button as ButtonComponent } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import './Prices.scss';
import Warning from '../../components/Warning/Warning';
import Table from '../../components/Table/Table';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const data = [
  {
    title: {
      render() {
        return (
          <div>
            <h4 className="mb-2">SP1047 / SANGSIN</h4>
            <p className="font-weight">
              Колодки тормозные передние Accent (ТагАЗ)/Pony/Lantra1,5...
            </p>
          </div>
        );
      },
    },
    camera: {
      value: 'camera',
    },
  },
];

const columns = [
  {
    key: 'title',
  },
  {
    key: 'camera',
  },
];

const Prices: FC<IProps> = () => {
  return (
    <div className="page-with-header">
      <div className="container">
        <div className="Prices Prices-container">
          <Breadcrumbs />
          <h1 className="Prices-title">Прайсы</h1>
          <div className="search-block mt-5 mb-2">
            <input
              placeholder="Введите название СТО"
              className="search-block--input"
            />
            <Button className="search-block--button">Поиск</Button>
          </div>
          <div className="d-flex mb-5 align-items-center flex-wrap">
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Записи для ТО
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Запчасти кузова
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Аксессуары
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Аккумуляторы
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Лампы
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Масла и жидкости
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Ремни
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2" danger>
              Щётки
            </ButtonComponent>
          </div>
          <div className="mb-3">
            <h2 className="Prices-subtitle mb-3">
              SP1047 | SANGSIN | КОМПЛЕКТ ПЕРЕДНИХ ТОРМОЗНЫХ КОЛОДОК
            </h2>
            <Warning>
              Что бы видеть цену со скидкой согласно вашей скидочной карте,
              авторизуйтесь или зарегистрируйтесь на сайте.
            </Warning>
          </div>
          <Table hideHeader data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Prices;
