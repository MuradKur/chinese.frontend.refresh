import { FC, useCallback, useState } from 'react';
import Details from '../../shablons/Details/Details';
import './TechnicalMaintenance.scss';
import headerImage from '../../assets/autoservice.jpg';
import { BiGift, BiPlus } from 'react-icons/bi';
import { COLORS } from '../../constants';
import Button from '../../components/Button/Button';
import CarCard from '../../components/CarCard/CarCard';
import Warning from '../../components/Warning/Warning';
import CalculateTo from '../../components/CalculateTo/CalculateTo';
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
import planovoe_to_avtomobilya from '../../assets/planovoe_to_avtomobilya.jpg';
import { columns, dataSource } from '../CarService/CarService';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import { LeftSideBarMenu, LeftSideBarSubMenu } from './menu';
import creta from '../../assets/creta.png';
import elantra from '../../assets/elantra.png';
import grandeur_0 from '../../assets/grandeur_0.png';
import h1 from '../../assets/h1.png';
import i30 from '../../assets/i30.png';
import i40 from '../../assets/i40.png';
import ix35 from '../../assets/ix35.png';
import santa_fe from '../../assets/santa_fe.png';
import solaris from '../../assets/solaris.png';
import sonata from '../../assets/sonata.png';
import tucson from '../../assets/tucson.png';
import Modal from '../../components/Modal/Modal';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const HYUNDAI = [
  {
    id: 1,
    title: 'Creta',
    image: creta,
  },
  {
    id: 2,
    title: 'Elantra',
    image: elantra,
  },
  {
    id: 100,
    title: 'Grandeur',
    image: grandeur_0,
  },
  {
    id: 3,
    title: 'H1',
    image: h1,
  },
  {
    id: 4,
    title: 'i30',
    image: i30,
  },
  {
    id: 5,
    title: 'i40',
    image: i40,
  },
  {
    id: 6,
    title: 'ix35',
    image: ix35,
  },
  {
    id: 7,
    title: 'Santa Fe',
    image: santa_fe,
  },
  {
    id: 8,
    title: 'Solaris',
    image: solaris,
  },
  {
    id: 9,
    title: 'Sonata',
    image: sonata,
  },
  {
    id: 10,
    title: 'Tucson',
    image: tucson,
  },
  {
    id: 11,
    title: 'Другая',
    image: notFoundCar,
  },
];

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
  const [visible, setVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  const renderCars = useCallback(() => {
    return CARS.map((item) => (
      <CarCard onClick={handleOpenModal} key={item.id} {...item} />
    ));
  }, [handleOpenModal]);

  const renderHundaiCars = useCallback(() => {
    return HYUNDAI.map((item) => (
      <CarCard onClick={handleOpenModal} key={item.id} {...item} />
    ));
  }, [handleOpenModal]);

  return (
    <>
      <Modal visible={visible} onClose={handleCloseModal}>
        <CalculateTo />
      </Modal>
      <Details
        menu={LeftSideBarMenu}
        submenu={LeftSideBarSubMenu}
        title="Плановое техническое обслуживание (ТО) автомобиля">
        <div className="TechnicalMaintenance">
          <img
            className=" wow fadeIn TechnicalMaintenance-image mb-2"
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
          <Row className="cars-list wow fadeIn mb-3 flex-wrap">
            {renderHundaiCars()}
          </Row>
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
          <div className="mb-4">
            <Warning>
              <b className="mb-1">Внимание!</b>
              <p className="mb-0">
                Автовладельцы автомобильных марок SsangYong, Daewoo и Chevrolet
                могут получить консультацию по стоимости ТО связавшись по
                телефону с любым из наших технических центров.
              </p>
            </Warning>
          </div>
          <hr />
          <h3 className="text-center TechnicalMaintenance-title--h3 danger mb-3">
            KIA
          </h3>
          <Row className="cars-list mb-3 flex-wrap">{renderCars()}</Row>
          <h3 className="text-center TechnicalMaintenance-title--h3 mb-3">
            АДРЕСА СЕРВИСОВ
          </h3>
          <Map className="CarService-map" />
          <h3 className="text-center TechnicalMaintenance-title--h3 mb-3 mt-3">
            СТАНЦИИ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ
          </h3>
          <Table
            className="wow fadeIn mb-3"
            dataSource={dataSource}
            columns={columns}
          />
          <div className="d-flex TechnicalMaintenance-content">
            <img
              className=" wow fadeIn TechnicalMaintenance-content--image"
              src={planovoe_to_avtomobilya}
              alt="planovoe_to_avtomobilya"
            />
            <div className="ml-2 TechnicalMaintenance-content--text">
              Есть ли у автолюбителя возможность избежать дорогостоящего ремонта
              в будущем или, как минимум, сократить эксплуатационные расходы? Во
              многом это зависит от самого владельца транспортного средства. И
              здесь имеют значение различные нюансы: манера вождения, условия в
              которых хранится автомобиль (гараж, открытая площадка и т. д.),
              своевременность технического обслуживания, в котором нуждаются все
              без исключения автомобили. Последний фактор особенно важен, ведь
              своевременное ТО – это не только замена расходных материалов, но и
              возможность постоянно поддерживать автомобиль в исправном (а
              значит, в безопасном) состоянии.
            </div>
          </div>
          <p>
            Своевременность выполнения планового технического обслуживания
            автомобиля (сокращенно – ТО) – это одна из ключевых рекомендаций
            производителя. К сожалению, далеко не все владельцы транспортных
            средств воспринимают ее как обязательный регламент. В результате –
            нарушение графика ТО, сокращение ресурса двигателя, коробки передач
            и других важных узлов автомобиля.
          </p>
          <p>
            <b>
              Важно! Техническое обслуживание автомобиля является плановым
              мероприятием. Поэтому все сроки, а также перечень мероприятий,
              которые подлежат обязательному выполнению, подробно прописаны в
              руководстве по эксплуатации.{' '}
            </b>
            Благодаря этому руководству у автолюбителя исчезает необходимость в
            том, чтобы «гадать на кофейной гуще» или пытаться самостоятельно
            определить состояние масла, которое находится на поверхности щупа.
            Вывод: как бы трудно вам ни было найти время на то, чтобы
            ознакомиться с содержимым руководства по эксплуатации, сделать это
            нужно обязательно. Полученная информация поможет решить множество
            вопросов
          </p>
          <ul className="ml-3 mb-3">
            <li className="mb-2">
              поможет, ориентируясь на пробег, определить: когда подошла пора
              для замены масла в двигателе или трансмиссии, когда следует
              заменить воздушный или топливный фильтр, когда нужно проверить
              состояние тормозных колодок и так далее;
            </li>
            <li className="mb-2">
              поможет избежать лишних расходов: некоторые особо ответственные
              водители обращаются к услугам сервисных специалистов намного чаще,
              чем это необходимо, а преждевременная замена расходных материалов,
              как мы понимаем, приводит к неоправданным денежным тратам;
            </li>
            <li>
              поможет использовать расходные материалы и топливо,
              соответствующие марке и другим особенностям своего транспортного
              средства.
            </li>
          </ul>
          <p>
            Впрочем, что касается подходящих сортов масла или, к примеру,
            разновидностей охлаждающей жидкости: в этих вопросах лучше всего
            помогут разобраться сотрудники нашей сети станций технического
            обслуживания. Они с готовностью предоставят подходящие расходники и
            произведут плановое ТО:
          </p>
          <ul className="ml-3 mb-3">
            <li className="mb-2">
              произведут замену масел и других рабочих жидкостей в автомобиле;
            </li>
            <li className="mb-2">выполнят необходимые регулировки;</li>
            <li className="mb-2">
              заменят фильтры, свечи, ремни и другие расходные материалы;
            </li>
            <li>проведут компьютерную диагностику всех систем автомобиля.</li>
          </ul>
          <p>
            Прошедший своевременное техническое обслуживаниеавтомобиль, никогда
            не разочарует владельца внезапной поломкой. Причем только регулярное
            ТО может гарантировать стопроцентную безопасность во время
            эксплуатации транспортного средства.
          </p>
          <b>
            <em>
              Плановое техническое обслуживание автомобилей KIA, Hyundai,
              SsangYong, Daewoo, Chevrolet, Вы можете пройти обратившись в любой
              из технических центров компании "Кореана".
            </em>
          </b>
          <div className="GuaranteePage-border mt-4">
            <h2 className="GuaranteePage-title-h2">
              НУЖНА ПОМОЩЬ? ПЕРЕЗВОНИМ!
            </h2>

            <p className="GuaranteePage-paragraph">
              Оставьте номер телефона и наш технический специалист свяжется с
              вами и поможет с записью
            </p>

            <div className="GuaranteePage-input-button-block-padding">
              <div className="GuaranteePage-input-button-block">
                <input className="GuaranteePage-input" type="text" />
                <Button
                  bgColor={COLORS.black}
                  className="GuaranteePage-send-button">
                  ОТПРАВИТЬ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Details>
      <Footer />
      <FloatingFooter />
    </>
  );
};

export default TechnicalMaintenance;
