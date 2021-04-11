import Modal from '../Modal/Modal';
import './ModalDeliveryAddress.scss';
import React, { FC } from 'react';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
}

interface IProps extends IExternalProps {}

const ModalDeliveryAddress: FC<IProps> = ({ visible, onClose }) => {
  return (
    <Modal okText="Сохранить" visible={visible} onClose={onClose}>
      <div>
        <h2 className="ModalDeliveryAddress-title">Адрес доставки</h2>
        <p className="ModalDeliveryAddress-paragraph">
          Почтовый индекс <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalDeliveryAddress-paragraph">
          Регион <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalDeliveryAddress-paragraph">
          Город <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalDeliveryAddress-paragraph">
          Улица <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalDeliveryAddress-paragraph">
          Дом <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalDeliveryAddress-paragraph">
          Корпус <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalDeliveryAddress-paragraph">
          Квартира <span className="star">*</span>
        </p>
        <input className="textField"></input>
      </div>
    </Modal>
  );
};

export default ModalDeliveryAddress;
