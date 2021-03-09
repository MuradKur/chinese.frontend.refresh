import React, { FC, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './SuspensionDiagnosis.scss';
import Button from '../../components/Button/Button';
import { Table } from 'antd';
import { COLORS } from '../../constants';
import Details from '../../shablons/Details/Details';
// @ts-ignore
import WOW from 'wowjs';
import { BiPhone } from 'react-icons/bi';

interface IExternalProps {}

interface IProps extends IExternalProps {}

export const dataSource = [
  {
    key: '1',

    modeWork: 'Амортизатор задний замена',
  },
  {
    key: '2',
    modeWork: 'Амортизатор задний замена',
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
        <Button
          bgColor={COLORS.transparent}
          className="SuspensionDiagnosis-button-td">
          {' '}
          <span className="SuspensionDiagnosis-number">
            {' '}
            <b>
              {' '}
              <b>
                {' '}
                <a href="tel:++78126407799">
                  Посмотреть цену применимо к марке и модели
                </a>{' '}
              </b>{' '}
            </b>{' '}
          </span>{' '}
        </Button>
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
      <Details>
        <Table
          className="wow fadeIn "
          dataSource={dataSource}
          columns={columns}
        />

        <h4 className="SuspensionDiagnosis-title-h2">
          {' '}
          СТАНЦИИ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ
        </h4>

        <Table
          className=" wow fadeIn "
          dataSource={dataSource}
          columns={columns}
        />

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
