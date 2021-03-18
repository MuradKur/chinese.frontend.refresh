import React, { FC, useCallback, useState } from 'react';
import Button from '../../components/Button/Button';
import './PriceTable.scss';
import Table from '../../components/Table/Table';
import { COLORS } from '../../constants';
import { MdPhotoCamera } from 'react-icons/md';
import { TiStar } from 'react-icons/ti';

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
    key: 'rating',
  },
  {
    key: 'cost',
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
            <h4 className="mb-2">Колодки HYUNDAI ACCENT 16V</h4>
          </div>
        );
      },
    },
    camera: {
      render() {
        return <div />;
      },
    },
    available_to_order: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="mb-0 ">10</p>
          </div>
        );
      },
    },
    available: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="mb-0">4 дн.</p>
          </div>
        );
      },
    },
    rating: {
      render() {
        return (
          <div className="Prices-ta">
            <div>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
            </div>
          </div>
        );
      },
    },
    cost: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="mb-0">
              <b style={{ color: COLORS.red }}> 990 руб. </b>
            </p>
            <p className="mb-0 Prices-table-cost ">
              <b> 990 руб. </b>
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
              Заказать
            </Button>
          </div>
        );
      },
    },
  },
  {
    title: {
      render() {
        return (
          <div>
            <h4 className="mb-2">Колодки HYUNDAI ACCENT 16V</h4>
          </div>
        );
      },
    },
    camera: {
      render() {
        return <div />;
      },
    },
    available_to_order: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="mb-0 ">10</p>
          </div>
        );
      },
    },
    available: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="mb-0">4 дн.</p>
          </div>
        );
      },
    },
    rating: {
      render() {
        return (
          <div className="Prices-ta">
            <div>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
              <TiStar className="Prices-ti-star"></TiStar>
            </div>
          </div>
        );
      },
    },
    cost: {
      render() {
        return (
          <div className="Prices-ta">
            <p className="mb-0">
              <b style={{ color: COLORS.red }}> 990 руб. </b>
            </p>
            <p className="mb-0 Prices-table-cost ">
              <b> 990 руб. </b>
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
              Заказать
            </Button>
          </div>
        );
      },
    },
  },
];

const columns3 = [
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
  const [isOpen, setOpen] = useState(false);

  const handleChangeOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [setOpen, isOpen]);

  const labelButton = isOpen ? 'Свернуть' : 'Показать все предложения';

  const data2 = [
    {
      title: {
        render() {
          return (
            <div>
              <h4 className="mb-2">SP1047 / SANGSIN</h4>
              <p className="font-weight">Колодки тормозные дисковые</p>
              <Button
                onClick={handleChangeOpen}
                bgColor={COLORS.transparent}
                color={COLORS.red}
                className="Prices-show-all-offers-button">
                {labelButton}
              </Button>
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
      available_to_order: {
        render() {
          return (
            <div className="Prices-ta">
              <h4 className="font-weight mb-0 "> Доступно</h4>
              <p className="mb-0">к заказу</p>
              <p className="mb-0">100</p>
            </div>
          );
        },
      },
      available: {
        render() {
          return (
            <div className="Prices-ta">
              <h4 className="font-weight mb-0 "> Поставка</h4>
              <p className="mb-0">4 дн.</p>
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
                Заказать
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
        className="Prices-table--article Prices-table-color wow fadeIn"
        hideHeader
        data={data2}
        columns={columns2}
      />
      {isOpen && (
        <Table
          className="Prices-table--article Prices-table-color-three wow fadeIn"
          hideHeader
          data={data3}
          columns={columns3}
        />
      )}
    </div>
  );
};

export default Prices;
