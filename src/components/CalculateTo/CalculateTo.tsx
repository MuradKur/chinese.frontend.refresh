import { FC, useCallback, useState } from 'react';
import { BiArrowBack, BiGift, BiPlus } from 'react-icons/bi';
import { Collapse } from 'antd';
import { COLORS } from '../../constants';
import Button from '../Button/Button';
import './CalculateTo.scss';

const { Panel } = Collapse;

interface IExternalProps {}

interface IProps extends IExternalProps {}

const CalculateTo: FC<IProps> = () => {
  const [active, setActive] = useState(1);
  const [selectedCard, setCard] = useState(1);

  const handleChangeActive = useCallback(
    (id: number) => {
      return () => setActive(id);
    },
    [setActive],
  );

  const handleChangeCard = useCallback(
    (id: number, idCard: number) => {
      return () => {
        handleChangeActive(id)();
        setCard(idCard);
      };
    },
    [handleChangeActive, setCard],
  );

  const renderButtons = useCallback(() => {
    return Array.from({ length: 2 }).map((_, index) => (
      <Button
        onClick={handleChangeActive(1)}
        className={`CalculateTo-button ${index === 0 ? 'first' : ''}`}
        key={index}>
        Hyundai Elantra 2015 Avante AD 1,6 бензин Gamma
      </Button>
    ));
  }, [handleChangeActive]);

  const renderCardsTo = useCallback(() => {
    return Array.from({ length: 8 }).map((_, index) => {
      const idx = index + 1;
      return (
        <Button
          onClick={handleChangeCard(2, index)}
          className={`CalculateTo-cardsTo ${index === 0 ? 'first' : ''}`}
          key={idx}>
          {idx} год или {idx * 15000}
        </Button>
      );
    });
  }, [handleChangeCard]);

  const activeTab = [
    {
      render: () => {
        return (
          <div>
            <h3 className="font-weight">ВЫБЕРИТЕ МОДИФИКАЦИЮ</h3>
            {renderButtons()}
          </div>
        );
      },
    },
    {
      render: () => {
        return (
          <div>
            <h3 className="font-weight">ВЫБЕРИТЕ ТО</h3>
            <div className="d-flex flex-wrap justify-content-between">
              {renderCardsTo()}
            </div>
          </div>
        );
      },
    },
    {
      render: () => {
        return (
          <div>
            <div className="d-flex align-items-center mb-2">
              <Button
                className="pl-0"
                onClick={handleChangeActive(1)}
                bgColor={COLORS.transparent}>
                <BiArrowBack color={COLORS.red} size={22} />
              </Button>
              <h3 className="font-weight mb-0">
                ИНФОРМАЦИЯ ПО ТО {selectedCard} ({selectedCard} ГОД ИЛИ{' '}
                {15000 * selectedCard}КМ)
              </h3>
            </div>
            <div>
              <div className="d-flex pl-2 pr-2 justify-content-between align-items-center border-bottom pb-1">
                <span>Стоимость работ</span>
                <span className="font-weight">3000 руб.</span>
              </div>
              <div className="d-flex pl-2 pr-2 justify-content-between align-items-center border-bottom pb-1 pt-1">
                <span>Стоимость запчастей</span>
                <span className="font-weight">4512 руб.</span>
              </div>
              <div className="d-flex pl-2 pr-2 bg-gray justify-content-between align-items-center border-bottom pb-1 pt-1">
                <span>Общая стоимость</span>
                <span className="font-weight">7512 руб.</span>
              </div>
              <div className="d-flex pl-2 pr-2 mb-3 bg-orange justify-content-between align-items-center border-bottom pb-1 pt-1">
                <span>Общая стоимость для новых клиентов</span>
                <span className="font-weight">4923.6 руб.</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <BiPlus color={COLORS.red} />
                <BiGift color={COLORS.red} size={20} />{' '}
                <p className="mb-0 ml-2 CalculateTo-preview--subtitle">
                  Бесплатная компьютерная диагностика электронных систем вашего
                  автомобиля в подарок.
                </p>
              </div>
              <Collapse>
                <Panel header="Перечень работ по ТО 1" key="1">
                  <ul className="ul-list">
                    <li>- Замена масла и масляного фильтра двигателя.</li>
                    <li>- Замена масла и масляного фильтра двигателя.</li>
                    <li>- Замена масла и масляного фильтра двигателя.</li>
                  </ul>
                </Panel>
                <Panel header="Запчасти" key="2">
                  <ul className="ul-list">
                    <li>- Замена масла и масляного фильтра двигателя.</li>
                    <li>- Замена масла и масляного фильтра двигателя.</li>
                    <li>- Замена масла и масляного фильтра двигателя.</li>
                  </ul>
                </Panel>
              </Collapse>
            </div>
          </div>
        );
      },
    },
  ];

  return activeTab[active].render();
};

export default CalculateTo;
