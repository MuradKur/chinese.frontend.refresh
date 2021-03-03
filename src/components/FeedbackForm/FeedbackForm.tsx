import Modal from '../Modal/Modal';
import './FeedbackForm.scss';
import React, { FC } from 'react';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
}

interface IProps extends IExternalProps {}

const FeedbackForm: FC<IProps> = ({ visible, onClose }) => {
  return (
    <Modal
      cancelText="Отмена"
      okText="Отправить"
      visible={visible}
      onClose={onClose}>
      <div>
        <h2 className="FeedbackForm-title">Отправить отзыв</h2>
        <p className="FeedbackForm-paragraph">Ваше имя:</p>
        <input className="textField"></input>
        <p className="FeedbackForm-paragraph">Tелефон:</p>
        <input className="textField"></input>
        <p className="FeedbackForm-paragraph">email:</p>
        <input className="textField"></input>
        <p className="FeedbackForm-paragraph">Сообщение:</p>
        <textarea className="textarea"></textarea>
      </div>
    </Modal>
  );
};

export default FeedbackForm;
