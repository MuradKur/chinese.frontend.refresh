import { FC, useCallback, useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Modal from '../../components/Modal/Modal';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import RegionSelectionModal from '../../components/RegionSelectionModal/RegionSelectionModal';
import Map from '../../components/Map/Map';
import HeatherPreview from '../../components/HeatherPreview/HeatherPreview';
import BlockWithIcons from '../../components/BlockWithIcons/BlockWithIcons';
import { COLORS } from '../../constants';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Components: FC<IProps> = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenModalRegion, setOpenModalRegion] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModalRegion = useCallback(() => {
    setOpenModalRegion(false);
  }, []);

  const handleOpenModalRegion = useCallback(() => {
    setOpenModalRegion(true);
  }, []);

  return (
    <div>
      <Header />
      <SubHeader />
      <HeatherPreview />
      <BlockWithIcons />
      <Button>ОСТАВИТЬ ОТЗЫВ</Button>
      <Button bgColor={COLORS.orange} onClick={handleOpenModal}>
        Открыть модалку
      </Button>
      <Button bgColor={COLORS.red} onClick={handleOpenModalRegion}>
        Открыть модалку region
      </Button>
      <FloatingButton />
      <br />
      <Modal visible={isOpenModal} onClose={handleCloseModal}>
        КОнтент
      </Modal>
      <LeftSideBar />
      <Map />
      <Breadcrumbs />
      <RegionSelectionModal
        visible={isOpenModalRegion}
        onClose={handleCloseModalRegion}
      />
    </div>
  );
};

export default Components;
