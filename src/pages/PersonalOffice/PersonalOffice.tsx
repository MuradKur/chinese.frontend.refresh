import { FC, useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './PersonalOffice.scss';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import { Tabs } from 'antd';
import { Row, Col } from 'antd';
// @ts-ignore
import WOW from 'wowjs';
import ModalPersonalData from '../../components/ModalPersonalData/ModalPersonalData';
import ModalCarInformation from '../../components/ModalCarInformation/ModalCarInformation';
import ModalDeliveryAddress from '../../components/ModalDeliveryAddress/ModalDeliveryAddress';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const { TabPane } = Tabs;

const PersonalOffice: FC<IProps> = () => {
  const [visibleAddress, setVisibleAddress] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleInformation, setVisibleInformation] = useState(false);

  const loadWow = () => {
    new WOW.WOW().init();
  };

  useEffect(loadWow, []);

  const handleOpenModal = useCallback((e) => {
    e.preventDefault();
    setVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  const handleOpenModalAddress = useCallback((e) => {
    e.preventDefault();
    setVisibleAddress(true);
  }, []);

  const handleCloseModalAddress = useCallback(() => {
    setVisibleAddress(false);
  }, []);

  const handleOpenModalInformation = useCallback((e) => {
    e.preventDefault();
    setVisibleInformation(true);
  }, []);

  const handleCloseModalInformation = useCallback(() => {
    setVisibleInformation(false);
  }, []);

  return (
    <div className="page-with-header">
      <div className="container">
        <div>
          <h1 className="mt-4">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h1>

          <Tabs onChange={loadWow} defaultActiveKey="1" type="card">
            <TabPane tab="Персональные данные" key="1">
              <div className="wow fadeIn">
                <p className="mt-5 mb-1">
                  <b>Аккаунт</b>{' '}
                  <a href="/" className="PersonalOffice-link">
                    изменить
                  </a>
                </p>
                <Row className="PersonalOffice-border-block pl-5">
                  <Col span={6}>
                    <p className="mt-2">Email:</p>
                    <p>Подписка:</p>
                  </Col>
                  <Col>
                    <p className="mt-2">kambaevahmed@list.ru</p>
                    <p>активна</p>
                  </Col>
                </Row>

                <p className="mt-5 mb-1">
                  <b>Персональные данные</b>{' '}
                  <a
                    onClick={handleOpenModal}
                    href="/"
                    className="PersonalOffice-link">
                    изменить
                  </a>
                </p>
                <ModalPersonalData
                  onClose={handleCloseModal}
                  visible={visible}
                />
                <Row className="PersonalOffice-border-block pl-5">
                  <Col span={6}>
                    <p className="mt-2">Фамилия:</p>
                    <p>Имя:</p>
                    <p>Отчество:</p>
                    <p>Телефон:</p>
                    <p>Город:</p>
                  </Col>
                  <Col>
                    <p className="mt-2">-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                  </Col>
                </Row>

                <p className="mt-5 mb-1">
                  <b>Информация об автомобиле</b>{' '}
                  <a
                    onClick={handleOpenModalInformation}
                    href="/"
                    className="PersonalOffice-link">
                    изменить
                  </a>
                </p>
                <ModalCarInformation
                  onClose={handleCloseModalInformation}
                  visible={visibleInformation}
                />
                <Row className="PersonalOffice-border-block pl-5">
                  <Col span={6}>
                    <p className="mt-2">Марка автомобиля:</p>
                    <p>Модель автомобиля:</p>
                    <p>VIN номер автомобиля:</p>
                    <p>Объём двигателя:</p>
                    <p>Год выпуска автомобиля:</p>
                  </Col>
                  <Col>
                    <p className="mt-2">-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                  </Col>
                </Row>

                <p className="mt-5 mb-1">
                  <b>Адрес доставки</b>{' '}
                  <a
                    onClick={handleOpenModalAddress}
                    href="/"
                    className="PersonalOffice-link">
                    изменить
                  </a>
                </p>
                <ModalDeliveryAddress
                  onClose={handleCloseModalAddress}
                  visible={visibleAddress}
                />
                <Row className="PersonalOffice-border-block pl-5">
                  <Col span={6}>
                    <p className="mt-2">Почтовый индекс:</p>
                    <p>Регион:</p>
                    <p>Город:</p>
                    <p>Улица:</p>
                    <p>Дом:</p>
                    <p>Корпус:</p>
                    <p>Квартира:</p>
                  </Col>
                  <Col>
                    <p className="mt-2">-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="Мои заказы" key="2">
              <div className="wow fadeIn">
                <Button className="PersonalOffice-button-items-orders">
                  ЗАКАЗЫ ПО ПОЗИЦИЯМ
                </Button>
                <p className="mt-4">Заказы отсутствуют</p>
              </div>
            </TabPane>
            <TabPane tab="Блокнот" key="3">
              <div className="wow fadeIn">
                <p>В вашем блокноте нет записей</p>
              </div>
            </TabPane>
            <TabPane tab="Мой гараж" key="4">
              <div className="wow fadeIn">
                <Button className="PersonalOffice-button-items-orders">
                  ДОБАВИТЬ МАШИНУ
                </Button>
              </div>
            </TabPane>
          </Tabs>
        </div>

        <FloatingFooter />
        <Footer />
      </div>
    </div>
  );
};

export default PersonalOffice;
