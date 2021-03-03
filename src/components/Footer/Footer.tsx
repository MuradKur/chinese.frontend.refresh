import { FC, useCallback, useState } from 'react';
import './Footer.scss';
import { COLORS } from '../../constants';
import { BiPhone, BiUser } from 'react-icons/bi';
import vk from '../../assets/VK.png';
import Twitter from '../../assets/Twitter.png';
import YouTube from '../../assets/YouTube.png';
import OK from '../../assets/OK.png';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Footer: FC<IProps> = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = useCallback((e) => {
    e.preventDefault();
    setVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div>
      <FeedbackForm onClose={handleCloseModal} visible={visible} />
      <div className="Footer-border">
        <div className="Footer-container">
          <div className="Footer-copyright--block">
            <p className="Footer-copyright--item Footer-copyright--link">
              Copyright ©2021{' '}
              <a className="Footer-link" href="/">
                asianaauto.ru
              </a>
            </p>
            <p className="Footer-copyright--item Footer-copyright--info">
              ООО«Альянс ЛТД» Все права защищены
            </p>
          </div>
          <div className="Footer-links--container">
            <div className="Footer-block">
              <h1 className="Footer-header">ОБЩИЙ РАЗДЕЛ</h1>
              <ul className="Footer-list">
                <li>
                  <a
                    className="Footer-link"
                    href="http://localhost:3000/about-company">
                    о компании
                  </a>
                </li>
                <li>
                  <a
                    className="Footer-link"
                    href="http://localhost:3000/vacancies">
                    вакансии
                  </a>
                </li>
                <li>
                  <a
                    className="Footer-link"
                    href="http://localhost:3000/delivery">
                    оптовикам
                  </a>
                </li>
                <li>
                  <a
                    className="Footer-link"
                    href="http://localhost:3000/contacts">
                    контакты
                  </a>
                </li>
                <li>
                  <a onClick={handleOpenModal} href="/" className="Footer-link">
                    форма обратной связи
                  </a>
                </li>
              </ul>
            </div>
            <div className="Footer-block">
              <h2 className="Footer-header">ЗАПЧАСТИ</h2>
              <ul className="Footer-list">
                <li>
                  <a
                    className="Footer-link"
                    href="https://koreanaparts.ru/parts">
                    Корея
                  </a>
                </li>
                {/* <li>
                  <a className="Footer-link" href="/">
                    Китай
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Япония
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="Footer-block">
              <h3 className="Footer-header">АВТОСЕРВИС</h3>
              <ul className="Footer-list">
                <li>
                  <a
                    className="Footer-link"
                    href="https://koreanaparts.ru/autoservice">
                    Корея
                  </a>
                </li>
                {/* <li>
                  <a className="Footer-link" href="/">
                    Китай
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Япония
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="Footer-biUser-biPhone">
            <div className="Footer-icon-item">
              <div className="Footer-icon">
                <BiUser color={COLORS.black} size={28} />
              </div>
              <div className="Footer-item-p">
                <a href="/">вход</a>
              </div>
              <div className="Footer-item-p mx-1">
                <p>/</p>
              </div>
              <div>
                <a className="Footer-item-pp" href="/">
                  регистрация
                </a>
              </div>
            </div>
            <div className="Footer-biPhone">
              <BiPhone className="mr-2" color={COLORS.black} size={28} />
              <div className="Footer-item-Phone">
                <a href="tel:+79602837775">8 (960) 283 77 75</a>
              </div>
            </div>
            <div className="Footer-icon-block">
              <div>
                <a href="https://vk.com/koreanaparts">
                  {' '}
                  <img className="Footer-icon" src={vk} alt="" />{' '}
                </a>
              </div>

              <div>
                <a href="https://twitter.com/Company_Koreana">
                  {' '}
                  <img className="Footer-icon" src={Twitter} alt="" />{' '}
                </a>
              </div>

              <div>
                <a href="https://www.youtube.com/channel/UCNTYU5QiLFuM6QcLHZ-ff0w">
                  {' '}
                  <img className="Footer-icon" src={YouTube} alt="" />{' '}
                </a>
              </div>

              <div>
                <a href="https://ok.ru/zapchastih">
                  {' '}
                  <img src={OK} alt="" />{' '}
                </a>
              </div>
            </div>

            <div>
              <a className="Footer-link d-block fs-12 td-line mb-1" href="/">
                Политика использования файлов Cookie
              </a>
              <a className="Footer-link d-block fs-12 td-line" href="/">
                Политика обработки персональных данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
