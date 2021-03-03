import { FC, useCallback, useState } from 'react';
import { COLORS } from '../../constants';
import './FloatingButton.scss';
import { BiPhone } from 'react-icons/bi';
import FloatingButtonModal from '../FloatingButtonModal/FloatingButtonModal';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const FloatingButton: FC<IProps> = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  return (
    <>
      <div onClick={handleOpenModal} className="callback-bt">
        <div className="text-call">
          <div className="block-center">
            <BiPhone
              size={40}
              className="FloatingButton-icon"
              color={COLORS.white}
            />
          </div>
          <span>
            Заказать
            <br />
            звонок
          </span>
        </div>
      </div>
      <FloatingButtonModal visible={isOpenModal} onClose={handleCloseModal} />
    </>
  );
};

export default FloatingButton;
