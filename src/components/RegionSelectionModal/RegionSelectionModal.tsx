import { FC } from 'react';
import './RegionSelectionModal.scss';
import Modal from '../Modal/Modal';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
}

interface IProps extends IExternalProps {}

const RegionSelectionModal: FC<IProps> = ({ visible, onClose }) => {
  return (
    <>
      <Modal
        className="RegionSelectionModal"
        visible={visible}
        onClose={onClose}>
        <div>
          <p className="RegionSelectionModal-item">
            Выберите свой город или область, чтобы видеть точное наличие и
            способы доставки в ваш регион
          </p>
          <div className="RegionSelectionModal-border">
            <div>
              <p>Розничные магазины Кореана</p>
            </div>
            <div className="RegionSelectionModal-Сontainer">
              <div>
                <a className="d-block" href="/">
                  Москва
                </a>
                <a className="d-block" href="/">
                  Санкт-Петербург
                </a>
              </div>
              <div className="RegionSelectionModal-Block">
                <a href="/">Брянск</a>
                <a href="/">Владимир</a>
                <a href="/">Выборг</a>
              </div>
              <div className="RegionSelectionModal-Block">
                <a href="/">Клин</a>
                <a href="/">Калуга</a>
                <a href="/">Королев</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegionSelectionModal;
