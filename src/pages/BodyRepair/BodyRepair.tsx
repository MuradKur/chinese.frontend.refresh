import React, { FC, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './BodyRepair.scss';
import Button from '../../components/Button/Button';
import { Table } from 'antd';
import { COLORS } from '../../constants';
import Details from '../../shablons/Details/Details';
import autoservice_edb46de2 from '../../assets/autoservice_edb46de2.jpg';
import kuzovnoy_remont from '../../assets/kuzovnoy_remont.png';
// @ts-ignore
import WOW from 'wowjs';
import { BiPhone } from 'react-icons/bi';

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
        <Button bgColor={COLORS.transparent} className="BodyRepair-button-td">
          {' '}
          <BiPhone className=" mr-1" size={20} />{' '}
          <span className="BodyRepair-number">
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

const BodyRepair: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Details title="Кузовной ремонт">
        <h1 className="BodyRepair-title-h1 "> КАЛЬКУЛЯТОР КУЗОВНЫХ РАБОТ</h1>

        <div className="d-flex">
          <div className="BodyRepair-border-div ">
            <a className="BodyRepair-sedans" href="/">
              Седаны
            </a>
          </div>
          <div className="BodyRepair-border-div ">
            <a className="BodyRepair-sedans" href="/">
              Универсалы и хечбеки
            </a>
          </div>
          <div className="BodyRepair-border-div ">
            <a className="BodyRepair-sedans" href="/">
              Кроссоверы
            </a>
          </div>
        </div>

        <div>
          <img
            className="BodyRepair-creta mb-5 mt-5"
            src={autoservice_edb46de2}
            alt=""
          />
        </div>

        <p>
          <b className="BodyRepair-paragraph-b mb-5">
            Выделите элемент кузова, требующий ремонта
          </b>
        </p>

        <div className="BodyRepair-block-div">
          <div className="d-block pl-5 pr-5">
            <p className="BodyRepair-em-p">
              Количество элементов:
              <b className="pl-2 BodyRepair-font-weight">0</b>
            </p>
          </div>
          <div className="d-block pl-5">
            <p className="BodyRepair-em-p">
              Итого:
              <b className=" pl-2 BodyRepair-font-weight">0 руб.</b>
            </p>
          </div>
        </div>

        <div className="BodyRepair-border mb-5">
          <div className="BodyRepair-circle">
            <p className="BodyRepair-exclamation-point">!</p>
          </div>
          <div>
            <p className="mt-4">
              <b>Уважаемые клиенты!</b>
            </p>
            <p>
              Просим учесть, что точную оценку стоимости ремонта Вы можете
              получить только при осмотре повреждений автомобиля нашими
              специалистами, так как калькулятор не предусмотрен для точной
              оценки внутренних, или иных повреждений и служит только для
              предварительных расчётов!
            </p>
            <p>
              <em className="BodyRepair-em-p">
                Расчёт калькулятора не является публичной офертой, определяемой
                положениями ч. 2 ст. 437 Гражданского кодекса Российской
                Федерации. Подробная информация о стоимости и сроках выполнения
                услуг доступна при обращении в малярно-кузовные центры компании
                Кореана.
              </em>
            </p>
          </div>
        </div>

        <Table
          className="wow fadeIn "
          dataSource={dataSource}
          columns={columns}
        />

        <p>
          Добро пожаловать в малярно-кузовные центры (МКЦ) компании "Кореана"!
          На сегодняшний день, наши МКЦ оснащёны самым современным оборудованием
          и укомплектованы специалистами высокого класса, что позволяет нам
          обслуживать не только профильные Hyundai, KIA, Daewoo, Ssang Yong и
          Chevrolet, но и автомобили любых марок.
        </p>

        <h2 className="BodyRepair-title-h1 mt-5">
          КУЗОВНОЙ РЕМОНТ В СЕТИ МКЦ КОМПАНИИ "КОРЕАНА".{' '}
        </h2>

        <div className="BodyRepair-block-mg-p">
          <img className="BodyRepair-icon " src={kuzovnoy_remont} alt="" />
          <p>
            {' '}
            Кузов автомобиля – самая «нежная» и, пожалуй, самая дорогая часть
            транспортного средства. От ее состояния зависит не только
            эстетичность, но и стоимость авто на вторичном рынке. Впрочем, даже
            если речь не идет о продаже транспортного средства, то мало кому
            доставит удовольствие ездить на автомобиле, кузов которого
            демонстрирует явные дефекты и производит отталкивающее впечатление
            одним своим видом. Но не только эстетическую сторону имеет проблема,
            связанная с неисправностями кузова. Поврежденные элементы «внешней
            обшивки», к примеру, являются самыми благодатными участками для
            распространения коррозии. А коррозия разрушает кузов подобно тому,
            как термиты уничтожают стволы вековых деревьев. Ее разрушительная
            деятельность до поры до времени может, и вовсе, не бросаться в
            глаза. Однако, когда водитель, наконец, обращает на нее внимание,
            отделаться небольшим косметическим ремонтом, как правило, уже не
            получается.
          </p>
        </div>

        <b>
          Можно выделить несколько ситуаций, которые говорят о том, что вашему
          автомобилю необходим кузовной ремонт:
        </b>

        <div className="pl-3 mb-5 mt-5">
          <ul>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                появление мелких царапин на поверхности лакокрасочного покрытия
                (их своевременное устранение даст гарантию того, что в месте
                повреждения не возникнет очагов коррозии, которые будут
                распространяться на неповрежденные участки);
              </p>
            </li>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                появление многочисленных очагов коррозии («рыжиков»),
                возникающих в процессе длительной эксплуатации транспортного
                средства;
              </p>
            </li>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                отчетливо видимые повреждения кузовных деталей – появляются в
                результате ДТП или стихийных факторов (град, падение тяжелых
                предметов в результате ураганного ветра и т. д.);
              </p>
            </li>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                необходимость полностью изменить внешний вид автомобиля
                (например, поменять его цвет);
              </p>
            </li>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                необходимость в замене съемных элементов кузова, вызванная
                повреждениями или действием коррозии (бамперы, двери, крылья и
                т. д.);
              </p>
            </li>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                повреждения несущих элементов кузова.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <p>
            Как видим, кузовной ремонт автомобиля может сводиться как к
            банальному восстановлению лакокрасочного покрытия, так и к
            масштабным мероприятиям, требующим замены поврежденных элементов или
            их полного восстановления с помощью стапелей и другого
            специализированного оборудования. В наших малярно-кузовных центрах
            есть все условия, оборудование и расходные материалы для
            оперативного ремонта и восстановления кузовных деталей. Также мы
            выполняем полный перечень работ, связанных с полировкой,
            окрашиванием и защитой кузова от коррозии.
          </p>
        </div>
        <p className="mb-4 mt-4">
          <b>К услугам наших клиентов:</b>
        </p>

        <div className="pl-3">
          <ul>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                любые разновидности малярно-кузовных работ под ключ;
              </p>
            </li>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                работы по исправлению геометрии кузова, связанные с
                последствиями ДТП или с неквалифицированным ремонтом в прошлом;
              </p>
            </li>
            <li className="BodyRepair-ul">
              <p className="BodyRepair-p">
                компьютерная подборка цветов ЛКМ для восстановления
                лакокрасочного покрытия и т. д.
              </p>
            </li>
          </ul>
        </div>

        <p className="BodyRepair-paragraph-p">
          {' '}
          <em>
            Восстановление кузова, а также малярные работы выполняются нашими
            специалистами с соблюдением технологических требований и нормативов.
            Мы осуществляем профессиональный кузовной ремонт автомобилей любой
            сложности и гарантируем качество и приемлемые сроки выполнения
            работы.
          </em>{' '}
        </p>

        <h3 className="BodyRepair-title-h1 mt-5">
          ПРЕИМУЩЕСТВА ОБРАЩЕНИЯ В НАШУ КОМПАНИЮ:
        </h3>
        <p className=" mb-4 mt-4">
          <b>1. Широкий спектр работ</b>
        </p>

        <div className="pl-3">
          <ul>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Малярно-кузовные центры совмещёны с техническими центрами нашей
                компании, поэтому у нас вы получаете возможность ремонта
                автомобиля "под ключ", независимо от того какие элементы и
                агрегаты автомобиля получили повреждение.
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Выполняем работы по устранению перекоса кузова, выправляем
                геометрию, даже после предыдущего некачественного или
                ненадлежащего ремонта.
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Наши специалисты по подбору цвета являются лидерами в области
                подбора красок для автомобилей. Подбор цвета осуществляется при
                помощи светоскопа, компьютера. Колорист в обязательном порядке
                делает выкраску для проверки соответствия цвета.
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Для восстановления лакокрасочного покрытия элементов
                используются материалы ведущих производителей 3M, MaxMeyer,
                DuPont, Mirka, Jeta Pro.
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                В наличии большая база цветов, и различных оттенков красок для
                корейских автомобилей, что позволяет добиваться отсутствия
                различий между покрашенными и не покрашенными деталями.
              </em>
            </li>

            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Новая линейка материалов для окраски позволяет красить элементы
                в срок от 1 дня.
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Покраска и сушка осуществляется в покрасочной камере с
                соблюдением всех необходимых требований и нормативов.
              </em>
            </li>

            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Возможна окраска элемента частично.
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Возможен ремонт даже сильно поврежденных элементов кузова без их
                замены.
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Даем гарантию на выполненные работы 6 месяцев.
              </em>
            </li>
          </ul>
        </div>
        <p className="mb-4 mt-4">
          <b>2. Квалифицированный персонал</b>
        </p>
        <div className="pl-3">
          <ul>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                В наших центрах работают опытные, квалифицированные специалисты
              </em>
            </li>
          </ul>
        </div>
        <p className="mb-4 mt-4">
          <b>3. Запчасти в наличии и на заказ</b>
        </p>
        <div className="pl-3">
          <ul>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Огромное наличие запчастей на собственном складе
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Возможность быстро доставлять заказные позиции запчастей
                отсутствующих на складе
              </em>
            </li>
          </ul>
        </div>
        <p className="mb-4 mt-4">
          <b>4. Оборудование и материалы</b>
        </p>

        <div className="pl-3">
          <ul>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Своя лаборатория по подбору цвета DuPont / Duxone
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Полировальные материалы исключительно 3M
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Окрасочно сушильная камера CMC Piper
              </em>
            </li>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Проверка качества ремонта осуществляется при помощи стенда
                HANTER
              </em>
            </li>
          </ul>
        </div>
        <p className="mb-4 mt-4">
          <b>5. Оплата работ</b>
        </p>
        <div className="pl-3">
          <ul>
            <li className="BodyRepair-ul mb-3">
              <em className="BodyRepair-p">
                Осуществляется по завершению работ, после приемки автомобиля
                клиентом. Возможна оплата по безналичному расчету, банковской
                картой, за наличный расчет.
              </em>
            </li>
          </ul>
        </div>

        <div className="BodyRepair-iframe mt-5">
          <iframe
            title="BodyRepair"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hlnV19jIQRk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        <div className="GuaranteePage-border">
          <h2 className="GuaranteePage-title-h2">НУЖНА ПОМОЩЬ? ПЕРЕЗВОНИМ!</h2>

          <p className="GuaranteePage-paragraph">
            Оставьте номер телефона и наш технический специалист свяжется с вами
            и поможет с записью
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
      </Details>
      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default BodyRepair;
