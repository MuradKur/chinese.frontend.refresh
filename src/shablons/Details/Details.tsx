import { FC, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Button from '../../components/Button/Button';
// @ts-ignore
import WOW from 'wowjs';
import './Details.scss';

interface IExternalProps {
  hideSearch?: boolean;
  title?: string;
}

interface IProps extends IExternalProps {}

const Details: FC<IProps> = ({ title, hideSearch, children }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="page-with-header">
      <div className="container">
        <div className="Details-container">
          <div>
            <Breadcrumbs />
          </div>
          <h1 className="Details-title">{title}</h1>
          {!hideSearch && (
            <div className="CarService-border-block">
              <input
                placeholder="Введите название СТО"
                className="CarService-search--input"
              />
              <Button className="CarService-search--button">Поиск</Button>
            </div>
          )}
          <section className="d-flex Details-section">
            <LeftSideBar />
            <div className="Details-block--right">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
