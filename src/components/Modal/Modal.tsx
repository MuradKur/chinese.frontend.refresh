import { FC } from 'react';
import { Modal, ModalProps } from 'antd';
import './Modal.scss';

interface IExternalProps {
  onClose?: () => void;
  className?: string;
}

interface IProps extends IExternalProps, ModalProps {}

const ModalComponent: FC<IProps> = ({
  visible,
  onClose,
  children,
  className,
}) => {
  return (
    <Modal className={className} visible={visible} onCancel={onClose}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
