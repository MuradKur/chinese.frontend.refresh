import { FC, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './News.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import NewsCard from '../../components/NewsCard/NewsCard';
// @ts-ignore
import WOW from 'wowjs';
import { useQuery } from '@apollo/client';
import { GET_NEWS } from '../../graph/queries/news';
import { Empty, Spin } from 'antd';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const News: FC<IProps> = () => {
  const { data, loading } = useQuery(GET_NEWS);

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
              <h1 className="News-title">Объявления Санкт-Петербург</h1>
            </div>
            <div>
              <div>
                <div className="News-leftSidebar-button-title">
                  <div className="News-leftSidebar-button">
                    <LeftSideBar />
                  </div>
                  {!data ? (
                    <Empty />
                  ) : (
                    <div className="News-title-block">
                      <NewsCard data={data.news} />
                    </div>
                  )}
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

export default News;
