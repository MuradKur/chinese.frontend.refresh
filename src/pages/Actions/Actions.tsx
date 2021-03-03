import { Col, Row } from 'antd';
import { FC, useEffect } from 'react';
import action from '../../assets/Poprobui370x370.jpg';
import './Actions.scss';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Actions: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="bg-white">
      <div className="container page-with-header">
        <div className="pt-3">
          <h1 className="Actions-title">Акции</h1>
          <Row justify="space-between">
            <Col className="Actions-column wow fadeInLeft" span={8}>
              <div className="Actions-card">
                <a target="_blank" href="/action/1">
                  <img
                    className="Actions-image mb-3"
                    src={action}
                    alt="action"
                  />
                  <h3 className="mb-3 text-center">Заголовок</h3>
                  <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                  </p>
                </a>
              </div>
            </Col>
            <Col className="Actions-column wow fadeInDown" span={8}>
              <div className="Actions-card">
                <a target="_blank" href="/action/1">
                  <img
                    className="Actions-image mb-3"
                    src={action}
                    alt="action"
                  />
                  <h3 className="mb-3 text-center">Заголовок</h3>
                  <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                  </p>
                </a>
              </div>
            </Col>
            <Col className="Actions-column wow fadeInRight" span={8}>
              <div className="Actions-card">
                <a target="_blank" href="/action/1">
                  <img
                    className="Actions-image mb-3"
                    src={action}
                    alt="action"
                  />
                  <h3 className="mb-3 text-center">Заголовок</h3>
                  <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                  </p>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Actions;
