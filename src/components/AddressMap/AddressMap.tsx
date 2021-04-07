import { FC, useCallback } from 'react';
import { Spin } from 'antd';
import Map from '../../components/Map/Map';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from '../../graph/queries/contacts';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const AddressMap: FC<IProps> = () => {
  const { data: contactsData, loading } = useQuery(GET_CONTACTS);

  const getCoordinates = useCallback(() => {
    if (contactsData && contactsData.contacts.length) {
      return contactsData.contacts;
    }

    return [];
  }, [contactsData]);

  const contacts = getCoordinates();
  const defaultCoordinates =
    contacts[0]?.coordinates.split(',').map((r: string) => Number(r)) || [];

  return (
    <Spin spinning={loading}>
      <Map
        defaultState={{ center: defaultCoordinates, zoom: 5 }}
        contacts={contacts}
        className="Making-map mt-2"
      />
    </Spin>
  );
};

export default AddressMap;
