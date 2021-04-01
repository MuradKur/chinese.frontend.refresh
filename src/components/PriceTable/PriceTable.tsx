import { FC, useCallback, useState } from 'react';
import Button from '../../components/Button/Button';
import './PriceTable.scss';
import Table from '../../components/Table/Table';
import { COLORS } from '../../constants';
import PrettyRating from 'pretty-rating-react';
import { Article } from '../../typings/types';
import { Row, Tooltip } from 'antd';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

interface IExternalProps {}

interface IProps extends IExternalProps {
  koreanaPrices?: Article[];
  portalPrices?: Article[];
}

const Prices: FC<IProps> = ({ koreanaPrices, portalPrices }) => {
  const [isOpen, setOpen] = useState(false);

  const handleChangeOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [setOpen, isOpen]);

  const labelButton = isOpen ? 'Свернуть' : 'Показать все предложения';

  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
  };

  const colors = {
    star: ['#d9ad26', '#d9ad26', '#434b4d'],
  };

  const columnKoreana = [
    {
      key: 'article',
      title: 'Номер',
      render(item: Article) {
        return (
          <div>
            <h4 className="mb-2 font-weight">{item.article}</h4>
          </div>
        );
      },
    },
    {
      key: 'brand',
      title: 'Бренд',
      render(item: Article) {
        return (
          <div>
            <p className="mb-2" style={{ color: COLORS.red }}>
              {item.article}
            </p>
          </div>
        );
      },
    },
    {
      key: 'name',
      title: 'Наименование',
      render(item: Article) {
        return (
          <Tooltip title={item.name}>
            <p className="PriceTable-item--name mb-0">{item.name}</p>
          </Tooltip>
        );
      },
    },
    {
      key: 'qty',
      title: 'Кол-во',
    },
    {
      key: 'amount',
      title: 'Цена',
    },
    {
      key: 'delivery',
      title: 'Доставка. дн.',
    },
    {
      key: 'button',
    },
    // {
    //   key: 'stock',
    //   title: 'Кол-во'
    // },
    // {
    //   key: 'harcode',
    // },
  ];

  const columnPortal = [
    {
      key: 'article',
      title: 'Номер',
      render(item: Article) {
        return (
          <div>
            <h4 className="mb-0 font-weight">{item.article}</h4>
          </div>
        );
      },
    },
    {
      key: 'brand',
      title: 'Бренд',
    },
    {
      key: 'name',
      title: 'Наименование',
      render(item: Article) {
        return (
          <Tooltip title={item.name}>
            <p className="PriceTable-item--name mb-0">{item.name}</p>
          </Tooltip>
        );
      },
    },
    {
      key: 'qty',
      title: 'Кол-во',
    },
    {
      key: 'amount',
      title: 'Цена',
    },
    {
      key: 'delivery',
      title: 'Доставка. дн.',
    },
    {
      key: 'suppliersRating',
      title: 'Рейтинг',
      render(item: Article) {
        if (!item.suppliersRating) {
          return (
            <PrettyRating value={0} icons={icons.star} colors={colors.star} />
          );
        }

        const rating = (100 - item.suppliersRating) / 20;

        return (
          <PrettyRating
            value={rating}
            icons={icons.star}
            colors={colors.star}
          />
        );
      },
    },
    {
      key: 'button',
    },
    // {
    //   key: 'stock',
    //   title: 'Кол-во'
    // },
    // {
    //   key: 'harcode',
    // },
  ];

  const koreanaPricesData = koreanaPrices
    ? koreanaPrices.map((item) => {
        return {
          ...item,
          button: {
            render() {
              return (
                <div>
                  <Button bgColor={COLORS.red} className="Prices-send-button">
                    В КОРЗИНУ
                  </Button>
                </div>
              );
            },
          },
        };
      })
    : [];

  const portalPricesData = portalPrices
    ? portalPrices.map((item) => {
        console.log(item);
        return {
          ...item,
          button: {
            render() {
              return (
                <div>
                  <Button bgColor={COLORS.red} className="Prices-send-button">
                    В КОРЗИНУ
                  </Button>
                </div>
              );
            },
          },
        };
      })
    : [];

  return (
    <div className="mb-4">
      <Table
        className="Prices-table--article Prices-table-color wow fadeIn"
        data={koreanaPricesData}
        columns={columnKoreana}
      />
      <Row justify="end">
        <Button
          onClick={handleChangeOpen}
          bgColor={COLORS.transparent}
          color={COLORS.red}
          className="Prices-show-all-offers-button">
          {labelButton}
        </Button>
      </Row>
      {isOpen && (
        <Table
          className="Prices-table--article table-information animation-slide-right Prices-table-color-three wow fadeIn"
          data={portalPricesData}
          columns={columnPortal}
        />
      )}
    </div>
  );
};

export default Prices;
