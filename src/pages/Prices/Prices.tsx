import React, { FC } from 'react';
import { Button as ButtonComponent } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import './Prices.scss';
import Warning from '../../components/Warning/Warning';
import Table from '../../components/Table/Table';
import { COLORS } from '../../constants';
import { MdPhotoCamera } from 'react-icons/md';
import { TiStar } from 'react-icons/ti';

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
      render() {
        return (
          <MdPhotoCamera className="Prices-md-photo-camera"></MdPhotoCamera>
        );
      },
    },
    available: {
      render() {
        return (
          <div className="Prices-ta">
            <h4 className="font-weight mb-0 "> В наличии</h4>
            <p className="mb-0">232 шт.</p>
            <p className="mb-0">склад Москва</p>
          </div>
        );
      },
    },
    rating: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="font-weight mb-0 "> Рейтинг</p>
            <p className="mb-0">
              <b> поставщика </b>
              <div>
                <TiStar className="Prices-ti-star"></TiStar>
                <TiStar className="Prices-ti-star"></TiStar>
                <TiStar className="Prices-ti-star"></TiStar>
                <TiStar className="Prices-ti-star"></TiStar>
                <TiStar className="Prices-ti-star"></TiStar>
              </div>
            </p>
          </div>
        );
      },
    },
    cost: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="font-weight mb-0 "> Стоимость</p>
            <p className="mb-0">
              <b style={{ color: COLORS.red }}> 990 руб. </b>
            </p>
            <p className="mb-0 Prices-table-cost ">
              <b> 990 руб. </b>
            </p>
            <p className="mb-0">
              <b style={{ color: COLORS.red }}> Скидка </b>
            </p>
          </div>
        );
      },
    },
    button: {
      render() {
        return (
          <div>
            <Button bgColor={COLORS.black} className="Prices-send-button">
              В РЕЗЕРВ
            </Button>
          </div>
        );
      },
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
  {
    key: 'available',
  },
  {
    key: 'rating',
  },
  {
    key: 'cost',
  },
  {
    key: 'button',
  },
];

const Prices: FC<IProps> = () => {
  return (
    <div className="page-with-header">
      <div className="container">
        <div className="Prices Prices-container pb-3">
          <Breadcrumbs />
          <h1 className="Prices-title wow fadeIn">Прайсы</h1>
          <div className="search-block mt-5 mb-2">
            <input
              placeholder="Введите название СТО"
              className="search-block--input"
            />
            <Button className="search-block--button">Поиск</Button>
          </div>
          <div className="d-flex mb-5 align-items-center flex-wrap">
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Записи для ТО
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Запчасти кузова
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Аксессуары
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Аккумуляторы
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Лампы
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Масла и жидкости
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Ремни
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Щётки
            </ButtonComponent>
          </div>
          <div className="mb-3">
            <Warning>
              <div className="break-all">
                Notice: Undefined index: tid in drupal_page_get_cache() (line
                1315 of /var/www/koreanaparts.ru/includes/bootstrap.inc).
              </div>
            </Warning>

            <h2 className="Prices-subtitle mb-5 mt-5 wow fadeIn">
              SP1047 | SANGSIN | КОМПЛЕКТ ПЕРЕДНИХ ТОРМОЗНЫХ КОЛОДОК
            </h2>
            <Warning>
              <b style={{ color: COLORS.red }}>
                {' '}
                Минимальная стоимость доставки{' '}
              </b>
              <b> 300 руб.</b>
              <div>
                <b style={{ color: COLORS.red }}>
                  {' '}
                  Окончательная цена доставки рассчитывается после оформления
                  заказа и согласования с менеджером.
                </b>
              </div>
              Если у Вас возникли сомнения в правильности подбора запчастей,
              воспользуйтесь формой <a href="/">"Запрос по VIN"</a>
            </Warning>
          </div>
          <h3 className="Prices-subtitle mb-2 mt-5 wow fadeIn">
            {' '}
            <b>
              {' '}
              Наличие для запрошенного артикула на центральном складе Кореана
            </b>
          </h3>
          <Table
            className=" Prices-table-color wow fadeIn"
            hideHeader
            data={data}
            columns={columns}
          />
          <Table
            className=" Prices-table-color wow fadeIn"
            hideHeader
            data={data}
            columns={columns}
          />
          <h5 className="Prices-subtitle mb-2 mt-5 wow fadeIn">
            {' '}
            <b> Дополнительные склады: запрошенный артикул</b>
          </h5>
          <Table
            className=" Prices-table-color wow fadeIn"
            hideHeader
            data={data}
            columns={columns}
          />
          <h6 className="Prices-subtitle mb-2 mt-5 wow fadeIn">
            {' '}
            <b>
              {' '}
              Дополнительные склады: аналоги (заменители) для запрошенного
              артикула
            </b>
          </h6>
          <Table
            className=" Prices-table-color wow fadeIn"
            hideHeader
            data={data}
            columns={columns}
          />
          <Table
            className=" Prices-table-color wow fadeIn"
            hideHeader
            data={data}
            columns={columns}
          />
          <Button className=" Prices-show-more-button wow fadeIn mb-5 mt-5">
            ПОКАЗАТЬ ЕЩЕ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Prices;
