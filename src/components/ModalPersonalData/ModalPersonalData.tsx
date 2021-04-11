import Modal from '../Modal/Modal';
import './ModalPersonalData.scss';
import React, { FC } from 'react';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
}

interface IProps extends IExternalProps {}

const ModalPersonalData: FC<IProps> = ({ visible, onClose }) => {
  return (
    <Modal okText="Сохранить" visible={visible} onClose={onClose}>
      <div>
        <h2 className="ModalPersonalData-title">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h2>
        <p className="ModalPersonalData-paragraph">
          Фамилия <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalPersonalData-paragraph">
          Имя <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalPersonalData-paragraph">
          Отчество <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalPersonalData-paragraph">
          Телефон <span className="star">*</span>
        </p>
        <input className="textField"></input>
        <p className="ModalPersonalData-paragraph">
          Город <span className="star">*</span>
        </p>
        <input className="textField"></input>
      </div>
    </Modal>
  );
};

export default ModalPersonalData;
