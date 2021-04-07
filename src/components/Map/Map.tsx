import { CloseOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import { FC, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark, MapProps } from 'react-yandex-maps';
import { COLORS } from '../../constants';
import { ContactType } from '../../typings/graphql';
import CustomButton from '../Button/Button';
import { setAddress } from '../../actions';
import './Map.scss';

interface IExternalProps {}

interface IProps extends IExternalProps, MapProps {
  contacts?: ContactType[];
  coordinates?: Array<number[]>;
  setAddress: (address: ContactType) => void;
}

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates: [] = [];

const MapComponent: FC<IProps> = (props) => {
  const [activeContact, setActiveContact] = useState<ContactType | null>(null);

  const handleClickMark = useCallback(
    (contact: ContactType) => () => {
      setActiveContact(contact);
    },
    [],
  );

  const cleanContact = () => {
    setActiveContact(null);
  };

  const getMapData = useCallback(() => {
    if (props.defaultState && props.defaultState.center) {
      return props.defaultState;
    }

    return mapData;
  }, [props.defaultState]);

  const renderContent = useCallback(() => {
    if (props.contacts) {
      return props.contacts.map((contact, index) => {
        const geometry = contact.coordinates.split(',').map((r) => Number(r));

        return (
          <Placemark
            onClick={handleClickMark(contact)}
            key={index}
            geometry={geometry}
          />
        );
      });
    }

    return (props.coordinates || coordinates).map((coordinate, index) => (
      <Placemark key={index} geometry={coordinate} />
    ));
  }, [props.contacts, handleClickMark, props.coordinates]);

  const handleSelectContact = useCallback(
    (contact: ContactType | null) => () => {
      if (contact) {
        props.setAddress(contact);
      }
    },
    [props],
  );

  return (
    <div className="map-modal">
      <YMaps>
        <div className={`map-modal--content ${activeContact ? 'open' : ''}`}>
          <div className="mb-1">
            Город: <b>{activeContact?.city}</b>
          </div>
          <div className="mb-1">
            Адрес: <b>{activeContact?.address}</b>
          </div>
          <div className="mb-1">
            Работа: <b>{activeContact?.workTime}</b>
          </div>
          <div className="mb-1">
            Телефон:{' '}
            <b>
              <a href={`tel: ${activeContact?.phone}`}>
                {activeContact?.phone}
              </a>
            </b>
          </div>
          <CustomButton
            onClick={cleanContact}
            className="map-modal--button"
            bgColor={COLORS.transparent}
            color={COLORS.red}>
            <CloseOutlined />
          </CustomButton>
          <Row justify="end">
            <CustomButton
              className="mt-2"
              onClick={handleSelectContact(activeContact)}>
              Выбрать
            </CustomButton>
          </Row>
        </div>
        <Map defaultState={getMapData()} {...props}>
          {renderContent()}
        </Map>
      </YMaps>
    </div>
  );
};

export default connect(null, { setAddress })(MapComponent);
