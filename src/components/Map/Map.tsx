import { FC, useCallback } from 'react';
import { YMaps, Map, Placemark, MapProps } from 'react-yandex-maps';

interface IExternalProps {}

interface IProps extends IExternalProps, MapProps {
  coordinates?: Array<number[]>;
}

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521],
];

const MapComponent: FC<IProps> = (props) => {
  const getMapData = useCallback(() => {
    if (props.defaultState && props.defaultState.center) {
      return props.defaultState;
    }

    return mapData;
  }, [props.defaultState]);

  return (
    <YMaps>
      <Map defaultState={getMapData()} {...props}>
        {(props.coordinates || coordinates).map((coordinate, index) => (
          <Placemark key={index} geometry={coordinate} />
        ))}
      </Map>
    </YMaps>
  );
};

export default MapComponent;
