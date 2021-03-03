import { FC } from 'react';
import Slider from '../Slider/Slider';
import './HeatherPreview.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const HeatherPreview: FC<IProps> = () => {
  return (
    <div className="HeatherPreview">
      <div className="HeatherPreview-bgColor">
        <div className="HeatherPreview-backround container page-container--full">
          <div className="HeatherPreview-content">
            <div className="pl-4">
              <h1 className="HeatherPreview-title pl-5">
                <em>Превосходство в деталях</em>
              </h1>
            </div>
            <div className="pl-4">
              <div className="HeatherPreview-subtitle--block pl-5">
                <p>
                  <em>Автовладельцы стремятся</em>
                  <br />
                  <em>к обслуживанию</em>
                  <br />
                  <em>в надежном сервисе</em>
                  <br />
                </p>
              </div>
            </div>
            <div className="HeatherPreview-subtitle--hr" />
            <div className="pl-4">
              <div className="HeatherPreview-subtitle--block pl-5 pb-5">
                <p>
                  <em>Специализируясь в азиатском</em>
                  <br />
                  <em>сегменте, мы знаем</em>
                  <br />
                  <em>Ваш автомобиль в деталях</em>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="slider-container">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatherPreview;
