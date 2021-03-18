import { FC, useEffect, useMemo } from 'react';
// @ts-ignore
import WOW from 'wowjs';
import { useQuery } from '@apollo/client';
import { GET_NEWS } from '../../graph/queries/news';
import { Empty, Spin } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import { RouteComponentProps } from 'react-router-dom';
import { NewsType } from '../../typings/graphql';

interface IExternalProps {}

interface IProps extends IExternalProps, RouteComponentProps<{ id: string }> {}

const NewsDetails: FC<IProps> = ({ match }) => {
  const { data, loading } = useQuery(GET_NEWS);
  const { id } = match.params;
  const news: NewsType | null = useMemo(() => {
    if (!data) {
      return null;
    }

    const news = data.news.find((item: NewsType) => item.id === id);
    return news;
  }, [data, id]);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="page-with-header">
        <div className="container">
          <div className="News-container">
            <div className="News-breadcrumbs-title">
              <div className="News-block">
                <Breadcrumbs />
              </div>
              <h1 className="News-title">{news?.title || `Новость №${id}`}</h1>
            </div>
            <div>
              <div>
                <div className="News-leftSidebar-button-title">
                  <div className="News-leftSidebar-button">
                    <LeftSideBar />
                  </div>
                  {!news ? <Empty /> : <div>{news.content}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <FloatingFooter />
      </div>
    </Spin>
  );
};

export default NewsDetails;
