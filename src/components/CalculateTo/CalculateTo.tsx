import { FC, useCallback, useEffect, useState } from 'react';
import { BiArrowBack, BiGift, BiPlus } from 'react-icons/bi';
import { Collapse } from 'antd';
import { COLORS } from '../../constants';
import Button from '../Button/Button';
import './CalculateTo.scss';
import { getModelsCars, getPriceCalculate } from '../../services/calculater';
import SignToForm from '../SignToForm/SignToForm';
import Modal, { IModalProps } from '../Modal/Modal';
// @ts-ignore
import WOW from 'wowjs';

const { Panel } = Collapse;

interface IExternalProps {
  modelId: number;
}

interface IProps extends IExternalProps, IModalProps {}

interface Model {
  id: number;
  name: string;
  marka: string;
}

interface Price {
  data: string;
  name: string;
  parts: Array<{
    amount: number;
    name: string;
    qty: number;
  }>;
  partsAmount: number;
  probeg: string;
  total: number;
  totalAction: number;
  worksAmount: number;
}

const CalculateTo: FC<IProps> = ({ modelId, ...restProps }) => {
  const [active, setActive] = useState(0);
  const [selectedCard, setCard] = useState<Price | null>(null);
  const [models, setModels] = useState<Model[]>([]);
  const [idModel, setModel] = useState(0);
  const [prices, setPrices] = useState<Price[]>([]);
  const [isActiveFooter, setActiveFooter] = useState(false);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  useEffect(() => {
    getModelsCars(modelId)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      });
  }, [modelId]);

  useEffect(() => {
    getPriceCalculate(idModel)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPrices(data);
        }
      });
  }, [idModel]);

  const handleChangeActive = useCallback(
    (id: number) => {
      return () => {
        setActive(id);
        if (setActiveFooter && id === 3) {
          setActiveFooter(true);
        }
      };
    },
    [setActive],
  );

  const handleChangeCard = useCallback(
    (id: number, card: Price) => {
      return () => {
        handleChangeActive(id)();
        setCard(card);
      };
    },
    [handleChangeActive, setCard],
  );

  const handleSelectModel = useCallback(
    (id: number, idModel) => {
      return () => {
        setModel(idModel);
        handleChangeActive(id)();
      };
    },
    [setModel, handleChangeActive],
  );

  const renderButtons = useCallback(() => {
    return models.map((model, index) => (
      <Button
        onClick={handleSelectModel(1, model.id)}
        className={`CalculateTo-button w-100 ${index === 0 ? 'first' : ''}`}
        key={model.id + index}>
        {model.name}
      </Button>
    ));
  }, [handleSelectModel, models]);

  const renderCardsTo = useCallback(() => {
    return prices.map((item, index) => {
      const idx = index + 1;
      return (
        <Button
          onClick={handleChangeCard(2, item)}
          className={`CalculateTo-cardsTo ${index === 0 ? 'first' : ''}`}
          key={idx}>
          {item.probeg}
        </Button>
      );
    });
  }, [handleChangeCard, prices]);

  const activeTab = [
    {
      render: () => {
        return (
          <div className="CalculateTo">
            <h3 className="font-weight">ВЫБЕРИТЕ МОДИФИКАЦИЮ</h3>
            <div className="scroll-list list-buttons">{renderButtons()}</div>
          </div>
        );
      },
    },
    {
      render: () => {
        return (
          <div className="CalculateTo">
            <div className="d-flex align-items-center mb-2">
              <Button
                className="pl-0"
                onClick={handleChangeActive(0)}
                bgColor={COLORS.transparent}>
                <BiArrowBack color={COLORS.red} size={22} />
              </Button>
              <h3 className="font-weight mb-0">ВЫБЕРИТЕ ТО</h3>
            </div>
            <div className="d-flex wow fadeIn list-buttons flex-wrap justify-content-between scroll-list">
              {renderCardsTo()}
            </div>
          </div>
        );
      },
    },
    {
      render: () => {
        return (
          <div className="CalculateTo">
            <div className="d-flex align-items-center mb-2">
              <Button
                className="pl-0"
                onClick={handleChangeActive(1)}
                bgColor={COLORS.transparent}>
                <BiArrowBack color={COLORS.red} size={22} />
              </Button>
              <h3 className="font-weight mb-0">
                ИНФОРМАЦИЯ ПО ТО {selectedCard?.name} ({selectedCard?.probeg})
              </h3>
            </div>
            <div className="wow fadeIn">
              <div className="d-flex pl-2 pr-2 justify-content-between align-items-center border-bottom pb-1">
                <span>Стоимость работ</span>
                <span className="font-weight">
                  {selectedCard?.worksAmount} руб.
                </span>
              </div>
              <div className="d-flex pl-2 pr-2 justify-content-between align-items-center border-bottom pb-1 pt-1">
                <span>Стоимость запчастей</span>
                <span className="font-weight">
                  {selectedCard?.partsAmount} руб.
                </span>
              </div>
              <div className="d-flex pl-2 pr-2 bg-gray justify-content-between align-items-center border-bottom pb-1 pt-1">
                <span>Общая стоимость</span>
                <span className="font-weight">{selectedCard?.total} руб.</span>
              </div>
              <div className="d-flex pl-2 pr-2 mb-3 bg-orange justify-content-between align-items-center border-bottom pb-1 pt-1">
                <span>Общая стоимость для новых клиентов</span>
                <span className="font-weight">
                  {selectedCard?.totalAction} руб.
                </span>
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
                    {selectedCard?.data.split('-').map((item, index) => (
                      <div key={index}>
                        {item ? '-' : ''} {item}
                      </div>
                    ))}
                  </ul>
                </Panel>
                <Panel header="Запчасти" key="2">
                  <ul className="ul-list">
                    {selectedCard?.parts.map((item, index) => (
                      <li key={index}>
                        <div className="d-flex border-bottom pt-1 pb-1 pl-1 pr-1 justify-content-between align-items-center">
                          <span>{item.name}</span>
                          <span>{item.amount * item.qty}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Collapse>
              <Button
                onClick={handleChangeActive(3)}
                className="w-100 mt-3 pt-3 pb-3 CalculateTo-form--button">
                Записаться на ТО
              </Button>
            </div>
          </div>
        );
      },
    },
    {
      render: () => {
        return (
          <div className="CalculateTo">
            <SignToForm visible={true} />
          </div>
        );
      },
    },
  ];

  const handleCloseModal = (e?: React.MouseEvent<HTMLElement>) => {
    setActive(0);
    setActiveFooter(false);

    if (restProps.onClose) {
      restProps.onClose();
    }

    if (restProps.onCancel) {
      restProps.onCancel(e as React.MouseEvent<HTMLElement>);
    }
  };

  return (
    <Modal
      okButtonProps={{ disabled: !isActiveFooter }}
      okText="Отправить"
      cancelText="Отменить"
      {...restProps}
      onClose={handleCloseModal}
      onCancel={handleCloseModal}>
      {activeTab[active].render()}
    </Modal>
  );
};

export default CalculateTo;
