import { FC } from 'react';
import './BlockWithIcons.scss';
import SpareParts from '../../assets/SpareParts.png';
import CarService from '../../assets/CarService.png';
import ForWholesalers from '../../assets/ForWholesalers.png';
import { COLORS } from '../../constants';
import { Link } from 'react-router-dom';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const BlockWithIcons: FC<IProps> = () => {
  const ColorsBlockWithIcons = {
    background: COLORS.silverGradient,
  };
  return (
    <div style={ColorsBlockWithIcons} className="BlockWithIcons-block">
      <div className="d-flex justify-content-center flex-wrap container page-container--full">
        <Link className="BlockWithIcons-link wow fadeIn" to="/">
          <div className="BlockWithIcons-item">
            <img
              className="BlockWithIcons-SparePartsstyle"
              src={SpareParts}
              alt=""
            />
            <p className="BlockWithIcons-heading">Запчасти</p>
          </div>
        </Link>
        <Link className="BlockWithIcons-link wow fadeIn" to="/">
          <div className="BlockWithIcons-item">
            <img
              className="BlockWithIcons-CarServicestyle"
              src={CarService}
              alt=""
            />
            <p className="BlockWithIcons-heading">Автосервис</p>
          </div>
        </Link>
        <Link className="BlockWithIcons-link wow fadeIn" to="/">
          <div className="BlockWithIcons-item">
            <img
              className="BlockWithIcons-ForWholesalersstyle"
              src={ForWholesalers}
              alt=""
            />
            <p className="BlockWithIcons-heading">Автосалон </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlockWithIcons;
