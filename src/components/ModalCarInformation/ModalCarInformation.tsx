import Modal from '../Modal/Modal';
import './ModalCarInformation.scss';
import React, { FC } from 'react';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
}

interface IProps extends IExternalProps {}

const ModalCarInformation: FC<IProps> = ({ visible, onClose }) => {
  return (
    <Modal okText="Сохранить" visible={visible} onClose={onClose}>
      <div>
        <h2 className="ModalCarInformation-title">Информация об автомобиле</h2>
        <p className="ModalCarInformation-paragraph">
          Марка автомобиля <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalCarInformation-paragraph">
          Модель автомобиля <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalCarInformation-paragraph">
          VIN номер автомобиля <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalCarInformation-paragraph">
          Объём двигателя <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalCarInformation-paragraph">
          Год выпуска автомобиля <span className="star">*</span>
        </p>
        <input className="textField"></input>
      </div>
    </Modal>
  );
};

export default ModalCarInformation;
