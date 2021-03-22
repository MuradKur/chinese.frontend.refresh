import React, { FC, useCallback, useState } from 'react';
import Button from '../../components/Button/Button';
import './ProductTable.scss';
import Table from '../../components/Table/Table';
import { COLORS } from '../../constants';
import { MdPhotoCamera } from 'react-icons/md';
import { InputNumber } from 'antd';
import { Link } from 'react-router-dom';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const columns2 = [
  {
    key: 'title',
  },
  {
    key: 'camera',
  },
  {
    key: 'available_to_order',
  },
  {
    key: 'available',
  },
  {
    key: 'cost',
  },
  {
    key: 'inputnumber',
  },
  {
    key: 'button',
  },
];

const data3 = [
  {
    title: {
      render() {
        return (
          <div>
            <h4>
              {' '}
              <b> Санкт-Петербург</b>
            </h4>
            <Link
              style={{ color: COLORS.black }}
              className="d-block ProductTable-paragraph-link"
              to="/">
              Гатчина, 25 октября пр., д.52 Б
            </Link>
            <Link
              style={{ color: COLORS.black }}
              className="d-block ProductTable-paragraph-link"
              to="/">
              Индустриальный пр. д.50
            </Link>
          </div>
        );
      },
    },

    available_to_order: {
      render() {
        return (
          <div className="ProductTable-ta ">
            <h4>
              {' '}
              <b>Резерв по телефону</b>{' '}
            </h4>
            <p style={{ color: COLORS.red }} className="ProductTable-mb">
              {' '}
              +7 (812) 640-20-99
            </p>
            <p style={{ color: COLORS.red }}>+7 (812) 640-77-55</p>
          </div>
        );
      },
    },
    available: {
      render() {
        return <div></div>;
      },
    },
    rating: {
      render() {
        return (
          <div className="ProductTable-ta">
            <h4>
              {' '}
              <b> Наличие</b>
            </h4>
            <p className="ProductTable-mb">2 шт.</p>
            <p>1 шт.</p>
          </div>
        );
      },
    },
    cost: {
      render() {
        return <div></div>;
      },
    },
    button: {
      render() {
        return <div></div>;
      },
    },
  },
];

const columns3 = [
  {
    key: 'title',
  },

  {
    key: 'available_to_order',
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

const ProductTable: FC<IProps> = () => {
  const [isOpen, setOpen] = useState(false);

  const handleChangeOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [setOpen, isOpen]);

  const labelButton = isOpen
    ? 'В наличии в 2 магазинах'
    : ' В наличии в 2 магазинах';

  const data2 = [
    {
      title: {
        render() {
          return (
            <div>
              <h4 className="mb-2">
                {' '}
                <b>MPH01 / MANDO</b>
              </h4>
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
            <MdPhotoCamera className="ProductTable-md-photo-camera"></MdPhotoCamera>
          );
        },
      },
      available_to_order: {
        render() {
          return (
            <div className="ProductTable-ta">
              <Button
                onClick={handleChangeOpen}
                bgColor={COLORS.transparent}
                color={COLORS.green}
                className="ProductTable-show-all-offers-button">
                {labelButton}
              </Button>
              <p className="mb-0">3 шт.</p>
              <p className="mb-0 ProductTable-under-order">
                Под заказ - в 26 магазинах
              </p>
            </div>
          );
        },
      },
      available: {
        render() {
          return <div></div>;
        },
      },
      cost: {
        render() {
          return (
            <div className="ProductTable-ta">
              <p className="font-weight mb-0 "> Стоимость</p>
              <p className="mb-0">
                <b> 830 руб. </b>
              </p>

              <p className="mb-0">
                <b style={{ color: COLORS.red }}> Скидка </b>
              </p>
            </div>
          );
        },
      },
      inputnumber: {
        render() {
          return <InputNumber min={1} max={10} defaultValue={3} />;
        },
      },
      button: {
        render() {
          return (
            <div>
              <Button bgColor={COLORS.red} className="ProductTable-send-button">
                В КОРЗИНУ
              </Button>
            </div>
          );
        },
      },
    },
  ];

  return (
    <div>
      <Table
        className="ProductTable-table--article ProductTable-table-color wow fadeIn"
        hideHeader
        data={data2}
        columns={columns2}
      />
      {isOpen && (
        <Table
          className="ProductTable-table--article ProductTable-table-color-three wow fadeIn"
          hideHeader
          data={data3}
          columns={columns3}
        />
      )}
    </div>
  );
};

export default ProductTable;
