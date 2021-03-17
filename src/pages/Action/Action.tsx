import { Col, Empty, Row } from 'antd';
import { FC, useEffect, useMemo } from 'react';
import actionImg from '../../assets/Poprobui370x370.jpg';
import './Action.scss';
// @ts-ignore
import WOW from 'wowjs';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';
import { GET_ACTIONS } from '../../graph/queries/actions';
import { ActionType } from '../../typings/graphql';

interface IExternalProps {}

interface IProps extends IExternalProps, RouteComponentProps<{ id: string }> {}

const Action: FC<IProps> = ({ match }) => {
  const { id } = match.params;
  const { data } = useQuery(GET_ACTIONS);
  const action: ActionType | null = useMemo(() => {
    if (!data) {
      return null;
    }
    const action = data.actions.find((item: ActionType) => item.id === id);
    return action;
  }, [id, data]);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="bg-white">
      <div className="container page-with-header">
        <div className="pt-5">
          <h1 className="Action-title">Акция №{id}</h1>
          {action ? (
            <Row justify="space-between">
              <Col className="Action-column--left" span={8}>
                <img
                  className="Action-image mb-3 wow zoomIn"
                  src={action.image || actionImg}
                  alt="action"
                />
              </Col>
              <Col className="Action-column--right wow fadeIn" span={16}>
                <h3 className="mb-3 text-center">{action.title}</h3>
                <p>{action.body}</p>
              </Col>
            </Row>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
};

export default Action;
