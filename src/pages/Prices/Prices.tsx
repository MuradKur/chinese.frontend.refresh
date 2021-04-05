import { FC, useCallback, useEffect, useState } from 'react';
import { Empty, Spin } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import PriceTable from '../../components/PriceTable/PriceTable';
import './Prices.scss';
import Warning from '../../components/Warning/Warning';
import { COLORS } from '../../constants';
import Footer from '../../components/Footer/Footer';
import ProductTable from '../../components/ProductTable/ProductTable';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import { PricesApi } from '../../services/prices';
// @ts-ignore
import WOW from 'wowjs';
import { RouteComponentProps } from 'react-router-dom';
import SearchBarPrices from '../../components/SearchBarPrices/SearchBarPrices';
import { PriceArticleResponse } from '../../typings/types';

interface IExternalProps {}

interface IProps
  extends IExternalProps,
    RouteComponentProps<{ article: string; id: string }> {}

const Prices: FC<IProps> = ({ match }) => {
  const { article: articleId, id } = match.params;
  const [article, setArticle] = useState<PriceArticleResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  useEffect(() => {
    setLoading(true);
    PricesApi.getPricesById(id).then((result) => {
      setLoading(false);
      setArticle(result);
    });
  }, [id]);

  const renderArticle = useCallback(() => {
    if (article) {
      return (
        <div>
          {article.requestedKoreana?.length ? (
            article.requestedKoreana.map((item, index) => {
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
          ) : (
            <Empty />
          )}
        </div>
      );
    }
    return <Empty />;
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
                    key={item.id}
                    hideHeader={hideHeader}
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

  return (
    <Spin spinning={loading}>
      <div className="page-with-header">
        <div className="container">
          <div className="Prices Prices-container pb-3">
            <Breadcrumbs />
            <h1 className="Prices-title wow fadeIn">Прайсы</h1>
            <SearchBarPrices />
            <div className="mb-3">
              <Warning className="wow slideInLeft">
                <div className="break-all">
                  Notice: Undefined index: tid in drupal_page_get_cache() (line
                  1315 of /var/www/koreanaparts.ru/includes/bootstrap.inc).
                </div>
              </Warning>

              <h2 className="Prices-subtitle mb-5 mt-5 wow fadeIn">
                {articleId} | SANGSIN | КОМПЛЕКТ ПЕРЕДНИХ ТОРМОЗНЫХ КОЛОДОК
              </h2>
              <Warning className="wow slideInRight">
                <b style={{ color: COLORS.red }}>
                  {' '}
                  Минимальная стоимость доставки{' '}
                </b>
                <b> 300 руб.</b>
                <div>
                  <b style={{ color: COLORS.red }}>
                    {' '}
                    Окончательная цена доставки рассчитывается после оформления
                    заказа и согласования с менеджером.
                  </b>
                </div>
                Если у Вас возникли сомнения в правильности подбора запчастей,
                воспользуйтесь формой <a href="/">"Запрос по VIN"</a>
              </Warning>
            </div>
            <h3 className="Prices-subtitle mb-2 mt-5 wow fadeIn">
              {' '}
              <b>
                {' '}
                Наличие для запрошенного артикула на центральном складе Кореана
              </b>
            </h3>
            {renderArticle()}
            <br />
            <h2>Другие прайсы</h2>
            {renderOtherArticle()}
            <hr />
            <em>Дефолтные данные(нужно закончить)</em>
            <h5 className="Prices-subtitle mb-2 mt-5 wow fadeIn">
              {' '}
              <b> Дополнительные склады: запрошенный артикул</b>
            </h5>
            <PriceTable />
            <h6 className="Prices-subtitle mb-2 mt-5 wow fadeIn">
              {' '}
              <b>
                {' '}
                Дополнительные склады: аналоги (заменители) для запрошенного
                артикула
              </b>
            </h6>

            <PriceTable />
            <ProductTable />
            <Button className=" Prices-show-more-button wow fadeIn mb-5 mt-5">
              ПОКАЗАТЬ ЕЩЕ
            </Button>
            <Footer />
            <FloatingFooter />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Prices;
