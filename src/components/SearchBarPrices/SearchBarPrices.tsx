import Button from '../../components/Button/Button';
import { Button as ButtonComponent } from 'antd';
import SearchInput from '../../components/SearchInput/SearchInput';

const SearchBarPrices = () => {
  return (
    <div>
      <div className="search-block mt-5 mb-2">
        <div>
          <div className="mb-3">
            <SearchInput />
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

export default SearchBarPrices;
