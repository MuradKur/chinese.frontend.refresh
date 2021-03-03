import { Col, Row } from 'antd';
import { FC, useEffect } from 'react';
import action from '../../assets/Poprobui370x370.jpg';
import './Action.scss';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Action: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="bg-white">
      <div className="container page-with-header">
        <div className="pt-5">
          <h1 className="Action-title">Акция №1</h1>
          <Row justify="space-between">
            <Col className="Action-column--left" span={8}>
              <img
                className="Action-image mb-3 wow zoomIn"
                src={action}
                alt="action"
              />
            </Col>
            <Col className="Action-column--right wow fadeIn" span={16}>
              <h3 className="mb-3 text-center">Заголовок</h3>
              <p>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов, используя Lorem Ipsum для распечатки образцов.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Action;
