import { Component } from 'react';
import './SliderCarService.scss';
import SliderCarService from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Parashutnaya from '../../assets/Parashutnaya.jpg';
import Commandant from '../../assets/Commandant.jpg';
import Sofiyskaya from '../../assets/Sofiyskaya.jpg';
import Simonova from '../../assets/Simonova.jpg';
import Moscow from '../../assets/Moscow.jpg';
import Industrial from '../../assets/Industrial.jpg';
import Science from '../../assets/Science.jpg';
import Krasnoputilovskaya from '../../assets/Krasnoputilovskaya.jpg';
import Peoples_Militia from '../../assets/Peoples_Militia.jpg';
import Small_Balkan from '../../assets/Small_Balkan.jpg';
import dalnevostochnyy from '../../assets/dalnevostochnyy.jpg';

export default class SimpleSliderCarService extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    // <SliderCarService {...settings}>
    //   {(data: { images: (string | undefined)[] }) => {
    //     data.images.map(
    //       (
    //         images: string | undefined,
    //         index: string | number | null | undefined,
    //       ) => {
    //         return (
    //           <img
    //             className="SliderCarService-carousel"
    //             key={index}
    //             src={images}
    //             alt=""
    //           />
    //         );
    //       },
    //     );
    //   }}
    // </SliderCarService>;

    return (
      <div className="SliderCarService-icon-block">
        <SliderCarService {...settings}>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Parashutnaya} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Commandant} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Sofiyskaya} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Simonova} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Moscow} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Industrial} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Science} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img
              className="SliderCarService-icon"
              src={Krasnoputilovskaya}
              alt=""
            />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img
              className="SliderCarService-icon"
              src={Peoples_Militia}
              alt=""
            />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img className="SliderCarService-icon" src={Small_Balkan} alt="" />
          </div>
          <div className="wow fadeIn SliderCarService-block-div">
            <img
              className="SliderCarService-icon"
              src={dalnevostochnyy}
              alt=""
            />
          </div>
        </SliderCarService>
      </div>
    );
  }
}
