import React, { FC, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './SuspensionDiagnosis.scss';
import Button from '../../components/Button/Button';
import { Table } from 'antd';
import { COLORS } from '../../constants';
import Details from '../../shablons/Details/Details';
import servise_s from '../../assets/servise_s.jpg';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

export const dataSource = [
  {
    key: '1',
    address: 'Амортизатор задний замена',
  },
  {
    key: '2',
    address: 'Амортизатор передний замена',
  },
  {
    key: '3',
    address: 'Балка задняя замена',
  },
  {
    key: '4',
    address: 'Втулка заднего стабилизатора замена',
  },
  {
    key: '5',
    address: 'Втулка стабилизатора переднего замена',
  },
  {
    key: '6',
    address: 'Кулак поворотный задний замена',
  },
  {
    key: '7',
    address: 'Кулак поворотный передний замена',
  },
  {
    key: '8',
    address: 'Опорный подшипник переднего амортизатора замена',
  },
  {
    key: '9',
    address: 'Подшипник задней ступицы замена',
  },
  {
    key: '10',
    address: 'Подшипник передней ступицы замена',
  },
  {
    key: '11',
    address: 'Привод задний замена',
  },
  {
    key: '12',
    address: 'Привод передний замена',
  },
];

export const columns = [
  {
    title: '',
    dataIndex: 'address',
    key: 'address',
  },

  {
    title: '',
    dataIndex: 'phone',
    key: 'phone',
    render() {
      return (
        <a href="/">
          <Button
            bgColor={COLORS.lightgray2}
            className="SuspensionDiagnosis-button-td">
            {' '}
            <span className="SuspensionDiagnosis-number">
              {' '}
              <b>
                {' '}
                <b> Посмотреть цену применимо к марке и модели</b>{' '}
              </b>{' '}
            </span>{' '}
          </Button>
        </a>
      );
    },
  },
];

const SuspensionDiagnosis: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Details title="Диагностика и ремонт подвески">
        <Table
          showHeader={false}
          className="wow fadeIn "
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />

        <h1 className="SuspensionDiagnosis-title-h1 mt-5">
          {' '}
          ДОВЕРЬТЕ РЕМОНТ И ДИАГНОСТИКУ ПОДВЕСКИ ПРОФЕССИОНАЛАМ.
        </h1>

        <div className="SuspensionDiagnosis-block-mg-p">
          <img className="SuspensionDiagnosis-icon " src={servise_s} alt="" />
          <p>
            {' '}
            <b> Диагностика и ремонт подвески автомобиля </b> бесспорно является
            обязательной составляющей при эксплуатации автомобиля. От состояния
            подвески зависят не только комфортное вождение, срок эксплуатации
            автомобиля, но и безопасность водителя, других участников дорожного
            движения. Наверное не нужно напоминать, что неисправная подвеска
            «убийственно» влияет на самый дорогой элемент в автомобиле – кузов.
            Различные вибрации и удары возникающие при проезде ям, дорожных
            швов, трамвайных путей и т.д., постепенно разрушают кузовные
            элементы автомобиля.
          </p>
        </div>
        <p>
          {' '}
          Давайте разберёмся на что в первую очередь стоит обратить внимание:
        </p>

        <div className="pl-3 mb-5 mt-5">
          <ul>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Возникновение посторонних стуков, скрипов, скрежета при
                вождении;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Ухудшение управляемости на дороге (автомобиль тянет в сторону) ;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Раскачка автомобиля при прохождении поворотов и неровностей
                дороги;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Подтекание масла со стоек амортизатора, так называемое «масляное
                запотевание» ;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Увеличение тормозного пути;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Неравномерный износ автомобильных шин;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Крен корпуса автомобиля, или уменьшение расстояния от колёс до
                колёсных арок.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <p>
            Рассчитывать на то, что всё обойдётся, или оттягивать визит в сервис
            не стоит, так как поломка любого элемента подвески ведёт к
            разрушению других связанных с ним деталей и приводит к значительному
            удорожанию ремонта подвески и другим неприятным, а порой и опасным
            последствиям. Необходимость проходить диагностику подвески при
            каждом плановом техническим обслуживанием вызвано тем, что ещё не
            подающий «бедственных сигналов» автомобиль уже может незаметно
            планомерно разрушаться.
          </p>
        </div>

        <p className="mb-5 mt-5">
          <b>
            При диагностике подвески наши мастера в первую очередь уделяют
            внимание следующим моментам:
          </b>
        </p>

        <div className="pl-3">
          <ul>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Отсутствии люфтов во всех узлах подвески;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Состоянию сайлентблоков и иных резиновых деталей подвески,
                включая все пыльники;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Наличию трещин в рычагах вызванных «усталостью» метала, или
                ударами при попадании в ямы;.
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Целостности опорных чашек, работоспособности амортизаторов и
                демпфирующих пружин;
              </p>
            </li>
            <li className="SuspensionDiagnosis-ul">
              <p className="SuspensionDiagnosis-p">
                Отсутствие течи масло из-под сальников.
              </p>
            </li>
          </ul>
        </div>

        <p className="SuspensionDiagnosis-paragraph-p">
          {' '}
          <em>
            Специалисты сети профессиональных технических центров нашей компании
            всегда готовы прийти на помощь и обеспечить качественную диагностику
            и необходимый ремонт подвески Вашего автомобиля.
          </em>{' '}
        </p>

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

export default SuspensionDiagnosis;
