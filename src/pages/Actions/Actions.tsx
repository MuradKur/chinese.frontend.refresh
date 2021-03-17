import { Col, Empty, Row, Spin } from 'antd';
import { FC, useCallback, useEffect } from 'react';
import action from '../../assets/Poprobui370x370.jpg';
import './Actions.scss';
// @ts-ignore
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ACTIONS } from '../../graph/queries/actions';
import { ActionType } from '../../typings/graphql';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Actions: FC<IProps> = () => {
  const { data, loading } = useQuery(GET_ACTIONS);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const renderActions = useCallback(() => {
    if (!data?.actions.length) {
      return <Empty />;
    }

    return (
      <Row justify="space-between">
        {data.actions?.map((item: ActionType) => (
          <Col key={item.id} className="Actions-column wow fadeInLeft" span={8}>
            <div className="Actions-card">
              <Link to={`/action/${item.id}`}>
                <img
                  className="Actions-image mb-3"
                  src={item.image || action}
                  alt="action"
                />
                <h3 className="mb-3 text-center">{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    );
  }, [data]);

  return (
    <Spin spinning={loading}>
      <div className="bg-white Actions">
        <div className="container page-with-header">
          <div className="pt-3">
            <h1 className="Actions-title">Акции</h1>
            {renderActions()}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Actions;
