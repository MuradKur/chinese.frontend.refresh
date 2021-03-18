import React, { FC, useCallback, useEffect, useState } from 'react';
import { BiMap, BiPhone } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';
import { COLORS } from '../../constants';
import './SubHeader.scss';
import Button from '../Button/Button';
import { Tooltip } from 'antd';
import RegionSelectionModal from '../RegionSelectionModal/RegionSelectionModal';
import { useQuery } from '@apollo/client';
import { GET_REGIONS } from '../../graph/queries/regions';
import { RegionType } from '../../typings/graphql';
import { getCookie } from '../../services/cookie';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const SubHeader: FC<IProps> = () => {
  const { data, error } = useQuery(GET_REGIONS);
  const [isOpenModal, setOpenModal] = useState(false);
  const [region, setRegion] = useState<RegionType | null>(null);

  const updateRegion = useCallback(() => {
    const regJson = getCookie('region');
    setRegion(regJson ? JSON.parse(regJson) : null);
  }, [setRegion]);

  useEffect(() => {
    updateRegion();
  }, [updateRegion]);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    updateRegion();
  }, [setOpenModal, updateRegion]);

  return (
    <div className="SubHeader">
      <RegionSelectionModal
        regions={data?.regions}
        visible={isOpenModal}
        error={Boolean(error)}
        onClose={handleCloseModal}
      />
      <div className="container page-container--full">
        <div className="SubHeader-container">
          <div className="SubHeader-block">
            <Button
              onClick={handleOpenModal}
              color={COLORS.red}
              bgColor={COLORS.transparent}>
              <BiMap className="mr-2" color={COLORS.red} size={24} />
              {region?.name || 'Санкт-Петербург'}
              <DownOutlined />
            </Button>
          </div>
          <div className="SubHeader-content">
            <Button
              className="mr-4"
              color={COLORS.red}
              bgColor={COLORS.transparent}>
              <BiPhone className="mr-2" color={COLORS.red} size={24} />
              <a href="tel:+79602837775">8 (960)283 77 75</a>
            </Button>
            <Button
              className="d-flex align-items-center"
              bgColor={COLORS.transparent}
              color={COLORS.red}>
              <Tooltip title="Личный кабинет">
                <FaUserCircle color={COLORS.red} size={25} />
              </Tooltip>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
