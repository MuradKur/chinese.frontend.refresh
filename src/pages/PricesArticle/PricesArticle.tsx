import { Col, Empty, Spin } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
// @ts-ignore
import WOW from 'wowjs';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { PricesApi } from '../../services/prices';
import SearchBarPrices from '../../components/SearchBarPrices/SearchBarPrices';
import { PriceArticle, PriceArticleResponse } from '../../typings/types';
import PriceTable from '../../components/PriceTable/PriceTable';
import './PricesArticle.scss';

interface IExternalProps {}

interface IProps
  extends IExternalProps,
    RouteComponentProps<{ article: string }> {}

const PricesArticle: FC<IProps> = ({ match }) => {
  const [prices, setPrices] = useState<PriceArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<PriceArticleResponse | null>(null);

  const articleId = match.params.article?.replace(/\-.+/, '');
  const brandId = match.params.article
    ?.replace(/.+\-/, '')
    .replace('slash', '/');

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  useEffect(() => {
    setLoading(true);
    PricesApi.getPricesByArticle(articleId, brandId).then((result) => {
      if (result.articles) {
        setPrices(result.articles);
      } else if (result.article) {
        setArticle(result);
      }
      setLoading(false);
    });
  }, [match, articleId, brandId]);

  const renderArticle = useCallback(() => {
    if (article) {
      return (
        <div>
          {article.requestedKoreana?.length
            ? article.requestedKoreana.map((item, index) => {
                const portals = article.requestedPortal.filter(
                  (t) => t.id === item.id,
                );
                const hideHeader = index > 0;
                return (
                  <PriceTable
                    hideHeader={hideHeader}
                    key={item.id}
                    portalPrices={portals}
                    koreanaPrices={[item]}
                  />
                );
              })
            : null}
        </div>
      );
    }
  }, [article]);

  const renderOtherArticle = useCallback(() => {
    if (article) {
      return (
        <div>
          {article.othersKoreana
            ? article.othersKoreana.map((item, index) => {
                const portals = article.othersPortal.filter(
                  (t) => t.id === item.id,
                );
                const hideHeader = index > 0;
                return (
                  <PriceTable
                    hideHeader={hideHeader}
                    key={item.id}
                    portalPrices={portals}
                    koreanaPrices={[item]}
                  />
                );
              })
            : null}
        </div>
      );
    }
  }, [article]);

  const renderContent = useCallback(() => {
    if (article) {
      return renderArticle();
    }

    if (!prices.length) {
      return <Empty />;
    }

    return (
      <Col span={16}>
        {prices.map((item) => (
          <Link to={`/prices/${item.article}/${item.id}`}>
            <div className="PriceArticle-item">
              <p className="mb-0 PriceArticle-item--title">
                {item.brand} {item.article}
              </p>
              <div className="PriceArticle-item--description">{item.name}</div>
            </div>
          </Link>
        ))}
      </Col>
    );
  }, [renderArticle, prices, article]);

  return (
    <div className="page-with-header">
      <div className="container pt-1">
        <div className="Prices Prices-container pb-3">
          <Breadcrumbs />
          <h1 className="Prices-title wow fadeIn">Прайсы</h1>
          <SearchBarPrices />
          <div className="mt-3">
            <Spin tip="Идёт загрузка прайсов" spinning={loading}>
              <h2>
                Наличие для запрошенного артикула в магазинах и на центральном
                складе Кореана
              </h2>
              {renderContent()}
              <br />
              <h2>Дополнительные склады: запрошенный артикул</h2>
              {renderOtherArticle()}
            </Spin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesArticle;
