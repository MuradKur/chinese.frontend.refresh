import { FC } from 'react';
import Modal from '../Modal/Modal';
import './FloatingButtonModal.scss';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
}

interface IProps extends IExternalProps {}

const FloatingButtonModal: FC<IProps> = ({ visible, onClose }) => {
  return (
    <Modal
      cancelText="Отмена"
      okText="Отправить"
      visible={visible}
      onClose={onClose}>
      <div>
        <h1 className="FloatingButtonModal-title">Свяжитесь с нами</h1>
        <p className="FloatingButtonModal-paragraph">Ваше имя:</p>
        <input className="textField"></input>
        <p className="FloatingButtonModal-paragraph">Tелефон:</p>
        <input className="textField"></input>
        <p className="FloatingButtonModal-paragraph">Удобное время звонка:</p>
        <input className="textField"></input>
        <p className="FloatingButtonModal-paragraph">
          Дополнительная информация:
        </p>
        <textarea className="textarea"></textarea>
      </div>
    </Modal>
  );
};

export default FloatingButtonModal;
