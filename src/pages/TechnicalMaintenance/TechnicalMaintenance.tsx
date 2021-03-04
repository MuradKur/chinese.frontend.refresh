import { FC, useCallback } from 'react';
import Details from '../../shablons/Details/Details';
import './TechnicalMaintenance.scss';
import headerImage from '../../assets/autoservice.jpg';
import { BiGift, BiPlus } from 'react-icons/bi';
import { COLORS } from '../../constants';
import Button from '../../components/Button/Button';
import CarCard from '../../components/CarCard/CarCard';
import Warning from '../../components/Warning/Warning';
import Map from '../../components/Map/Map';
import { Row, Table } from 'antd';
import ceed from '../../assets/ceed.png';
import cerato from '../../assets/cerato.png';
import mohave from '../../assets/mohave.png';
import optima from '../../assets/optima.png';
import picanto from '../../assets/picanto.png';
import rio from '../../assets/rio.png';
import sorento_prime from '../../assets/sorento_prime.png';
import soul from '../../assets/soul.png';
import sportage from '../../assets/sportage.png';
import venga from '../../assets/venga.png';
import notFoundCar from '../../assets/not-found-car.png';
import sorento from '../../assets/sorento.png';
import { columns, dataSource } from '../CarService/CarService';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const CARS = [
  {
    id: 1,
    title: 'Ceed',
    image: ceed,
  },
  {
    id: 2,
    title: 'Cerato',
    image: cerato,
  },
  {
    id: 3,
    title: 'Mohave',
    image: mohave,
  },
  {
    id: 4,
    title: 'Optima',
    image: optima,
  },
  {
    id: 5,
    title: 'Picanto',
    image: picanto,
  },
  {
    id: 6,
    title: 'Rio',
    image: rio,
  },
  {
    id: 6.5,
    title: 'Sorento',
    image: sorento,
  },
  {
    id: 7,
    title: 'Sorento Prime',
    image: sorento_prime,
  },
  {
    id: 8,
    title: 'Soul',
    image: soul,
  },
  {
    id: 9,
    title: 'Sportage',
    image: sportage,
  },
  {
    id: 10,
    title: 'Venga',
    image: venga,
  },
  {
    id: 11,
    title: 'Другая',
    image: notFoundCar,
  },
];

const TechnicalMaintenance: FC<IProps> = () => {
  const renderCars = useCallback(() => {
    return CARS.map((item) => <CarCard key={item.id} {...item} />);
  }, []);

  return (
    <Details>
      <div className="TechnicalMaintenance">
        <img
          className="TechnicalMaintenance-image mb-2"
          src={headerImage}
          alt="autoservice"
        />
        <div className="d-flex align-items-center">
          <BiPlus color={COLORS.red} />
          <BiGift color={COLORS.red} size={20} />{' '}
          <p className="mb-0 ml-2 TechnicalMaintenance-preview--subtitle">
            Бесплатная компьютерная диагностика электронных систем вашего
            автомобиля в подарок.
          </p>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <Button>ЗАПИСЬ НА ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ</Button>
        </div>
        <h2 className="text-center TechnicalMaintenance-title--h2 mb-3">
          КАЛЬКУЛЯТОР ТО
        </h2>
        <p className="mb-3 text-center">Выберите модель для расчета ТО</p>
        <h3 className="text-center TechnicalMaintenance-title--h3 danger mb-3">
          HYUNDAI
        </h3>
        <Row className="cars-list mb-3">{renderCars()}</Row>
        <p className="text-center color-gray mb-0">
          Не нашли нужную модель или модификацию? Позвоните в любой СТО и
          получите бесплатную консультацию наших <br />
          специалистов.
        </p>
        <p className="text-center color-gray">
          Или оставьте заявку на обратный звонок.
        </p>
        <Row justify="center" className="mb-4">
          <Button className="mr-1">АДРЕСА И ТЕЛЕФОНЫ</Button>
          <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
        </Row>
        <Warning>
          <b className="mb-1">Внимание!</b>
          <p className="mb-0">
            Автовладельцы автомобильных марок SsangYong, Daewoo и Chevrolet
            могут получить консультацию по стоимости ТО связавшись по телефону с
            любым из наших технических центров.
          </p>
        </Warning>
        <h3 className="text-center TechnicalMaintenance-title--h3 mb-3">
          HYUNDAI
        </h3>
        <Map className="CarService-map" />
        <h3 className="text-center TechnicalMaintenance-title--h3 mb-3 mt-3">
          СТАНЦИИ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ
        </h3>
        <Table
          className="wow fadeIn "
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </Details>
  );
};

export default TechnicalMaintenance;
