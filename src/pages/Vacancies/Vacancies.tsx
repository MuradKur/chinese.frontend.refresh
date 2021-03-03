import { FC, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './Vacancies.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Button from '../../components/Button/Button';
// @ts-ignore
import WOW from 'wowjs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Vacancies: FC<IProps> = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="page-with-header">
      <div className="container">
        <div className="Vacancies-container">
          <div>
            <div className="Vacancies-leftSidebar-button-title">
              <div className="Vacancies-leftSidebar-button">
                <div className="Vacancies-breadcrumbs-title">
                  <div className="Vacancies-block">
                    <Breadcrumbs />
                  </div>
                  <h1 className="Vacancies-title">Вакансии Санкт-Петербург</h1>
                </div>
                <LeftSideBar />
              </div>

              <div className="Vacancies-title-block">
                <div className="mb-1">
                  Наша команда – это более 400 человек-профессионалов своего
                  дела.{' '}
                  <p>
                    Среди них есть те, кто работает с нами уже много лет, и те,
                    кто пришел совсем недавно.
                  </p>{' '}
                  <p>
                    И всех их объединяет желание работать в стабильном
                    проверенным временем бизнесе, который постоянно растет и{' '}
                  </p>{' '}
                  <p>
                    {' '}
                    развивается, открывая для себя и для своих клиентов новые
                    горизонты и возможности.{' '}
                  </p>{' '}
                  <div className="mb-1">
                    {' '}
                    <p className="Vacancies-p"></p>
                    Кого мы хотим видеть в наших рядах?{' '}
                  </div>{' '}
                  <p>
                    Активных и энергичных людей, готовых совершенствоваться
                    профессионально, внедрять новые технологии, искать и{' '}
                  </p>{' '}
                  <p>
                    {' '}
                    находить сильные решения и тем самым оказывать лучший сервис
                    нашим клиентам.{' '}
                  </p>
                  Узнали себя? Тогда ждем ваше резюме!
                </div>

                <div className="Vacancies-button-block-div">
                  <div className="Vacancies-button-block">
                    <Button className="Vacancies-button">
                      ПОСМОТРЕТЬ ВАКАНСИИ
                    </Button>
                  </div>

                  <div className="Vacancies-button-block">
                    <Button className="Vacancies-button">
                      ОТПРАВИТЬ РЕЗЮМЕ
                    </Button>
                  </div>
                </div>

                <p className="Vacancies-contact">
                  {' '}
                  <b> По вопросам работы в компании: </b> Чураков Филипп
                  Анатольевич;{' '}
                  <a href="tel:+79004700881;">+7 (900) 470-08-81;</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default Vacancies;
