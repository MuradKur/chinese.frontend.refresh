import { FC, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './CarService.scss';
import Button from '../../components/Button/Button';
import Map from '../../components/Map/Map';
import { BiPhone } from 'react-icons/bi';
import SliderCarService from '../../components/SliderCarService/SliderCarService';
import { Table } from 'antd';
import { COLORS } from '../../constants';
import autoservise_kind_work1png from '../../assets/autoservise_kind_work1png.png';
import servisnaya_knizhka from '../../assets/servisnaya_knizhka.png';
import autoservise_kind_work1 from '../../assets/autoservise_kind_work1.png';
import autoservise_kind_work_ from '../../assets/autoservise_kind_work_.png';
import autoservise_kind_work1_13 from '../../assets/autoservise_kind_work1_13.png';
import autoservise_kind_work1_11 from '../../assets/autoservise_kind_work1_11.png';
import autoservise_kind_work1_13__ from '../../assets/autoservise_kind_work1_13__.png';
import autoservise_kind_work1_19 from '../../assets/autoservise_kind_work1_19.png';
import autoservise_kind_work1_17 from '../../assets/autoservise_kind_work1_17.png';
import autoservise_kind_work1_01 from '../../assets/autoservise_kind_work1_01.png';
import autoservise_kind_work1_18 from '../../assets/autoservise_kind_work1_18.png';
import autoservise_kind_work1_14 from '../../assets/autoservise_kind_work1_14.png';
import autoservise_kind_work1_09 from '../../assets/autoservise_kind_work1_09.png';
import autoservise_kind_work1_02 from '../../assets/autoservise_kind_work1_02.png';
import autoservise_kind_work1_05 from '../../assets/autoservise_kind_work1_05.png';
import autoservise_kind_work1_12 from '../../assets/autoservise_kind_work1_12.png';
import autoservise_kind_work1_08 from '../../assets/autoservise_kind_work1_08.png';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

export const dataSource = [
  {
    key: '1',
    modeWork: 'пн-вс: 09:00-21:00',
    address: 'Народного Ополчения пр., д.201',
    phone: '+7(812) 640-77-99',
  },
  {
    key: '2',
    modeWork: 'пн-вс: 09:00-21:00',
    address: 'Народного Ополчения пр., д.201',
    phone: '+7(812) 640-77-99',
  },
];

export const columns = [
  {
    title: 'Подразделение / Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Режим работы',
    dataIndex: 'modeWork',
    key: 'modeWork',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
    render() {
      return (
        <Button bgColor={COLORS.transparent} className="CarService-button-td">
          {' '}
          <BiPhone className="CarService-biphone mr-1" size={20} />{' '}
          <span className="CarService-number">
            {' '}
            <b>
              {' '}
              <b>
                {' '}
                <a href="tel:++78126407799">+7(812) 640-77-99</a>{' '}
              </b>{' '}
            </b>{' '}
          </span>{' '}
        </Button>
      );
    },
  },
];

const CarService: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="page-with-header">
      <div className="container">
        <div className="CarService-container">
          <div>
            <div className="CarService-breadcrumbs-title">
              <div className="CarService-block">
                <Breadcrumbs />
              </div>
              <h1 className="CarService-title">
                Автосервис для корейских автомобилей | Санкт-Петербург
              </h1>
            </div>
          </div>
        </div>

        <div className="CarService-border-block">
          <input
            placeholder="Введите название СТО"
            className="CarService-search--input"
          />
          <Button className="CarService-search--button">Поиск</Button>
        </div>

        <div className=" wow fadeIn CarService-icon-block">
          <a href="/actions">
            <img
              className="CarService-icon "
              src={autoservise_kind_work1png}
              alt=""
            />
          </a>
          <a href="/guarante">
            <img className="CarService-icon" src={servisnaya_knizhka} alt="" />
          </a>
          <a href="/autoservice/technical-maintenance">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work_}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_13}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon "
              src={autoservise_kind_work1_11}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_13__}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_19}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_17}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_01}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_18}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_14}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_09}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_02}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_05}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_12}
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="CarService-icon"
              src={autoservise_kind_work1_08}
              alt=""
            />
          </a>
        </div>

        <h2 className="CarService-title-h2">АДРЕСА СЕРВИСОВ</h2>

        <div>
          <Map className="CarService-map"></Map>
        </div>

        <div>
          <h3 className="CarService-title-h2">МАЛЯРНО-КУЗОВНОЙ ЦЕНТР</h3>
        </div>
        <Table
          className="wow fadeIn "
          dataSource={dataSource}
          columns={columns}
        />

        <h4 className="CarService-title-h2">
          {' '}
          СТАНЦИИ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ
        </h4>

        <Table
          className=" wow fadeIn "
          dataSource={dataSource}
          columns={columns}
        />
        <h5 className="CarService-title-h2">ГАЛЕРЕЯ НАШИХ СТО</h5>
      </div>

      <SliderCarService />

      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default CarService;
