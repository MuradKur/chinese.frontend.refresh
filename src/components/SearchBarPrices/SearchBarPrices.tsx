import Button from '../../components/Button/Button';
import { Button as ButtonComponent } from 'antd';
import { useHistory, withRouter, RouteComponentProps } from 'react-router-dom';
import SearchInput from '../../components/SearchInput/SearchInput';
import { FC, useCallback, useState } from 'react';
import { Article } from '../../typings/types';
import { PricesApi } from '../../services/prices';

interface PriceSearch {
  id: string;
  value: string;
  label: string;
}

interface IProps extends RouteComponentProps<{ article: string }> {}

const SearchBarPrices: FC<IProps> = ({ match }) => {
  const history = useHistory();

  const [options, setOptions] = useState<PriceSearch[]>([]);

  const requestPrices = useCallback((value) => {
    PricesApi.getPricesByArticle(value).then((result) => {
      if (result.articles) {
        setOptions(
          result.articles.map((item: Article) => ({
            id: JSON.stringify(item),
            value: `${item.article} ${item.brand}`,
            label: `${item.article} ${item.brand}`,
          })),
        );
      } else if (result.article) {
        setOptions([
          {
            id: JSON.stringify(result),
            value: `${result.article} ${result.brand}`,
            label: `${result.article} ${result.brand}`,
          },
        ]);
      }
    });
  }, []);

  const onSelect = (_: string, option: any) => {
    const price = JSON.parse(option.id);
    history.push(`/prices/${price.article}`);
  };

  const onChange = (data: string) => {
    requestPrices(data);
  };

  return (
    <div>
      <div className="search-block mt-5 mb-2">
        <div>
          <div className="mb-3">
            <SearchInput
              options={options}
              onSelect={onSelect}
              onChange={onChange}
              defaultValue={match.params.article}
            />
          </div>
          <div className="d-flex mb-5 align-items-center flex-wrap">
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Записи для ТО
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Запчасти кузова
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Аксессуары
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Аккумуляторы
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Лампы
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Масла и жидкости
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Ремни
            </ButtonComponent>
            <ButtonComponent className="ml-1 mr-1 mb-2 wow fadeIn" danger>
              Щётки
            </ButtonComponent>
          </div>
        </div>
        <Button className="search-block--button">Поиск</Button>
      </div>
    </div>
  );
};

export default withRouter(SearchBarPrices);
