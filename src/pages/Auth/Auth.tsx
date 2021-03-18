import React, { FC, useState } from 'react';
import './Auth.scss';
import Warning from '../../components/Warning/Warning';
import { Button, Input, Tabs } from 'antd';

interface IExternalProps {}

const { TabPane } = Tabs;

interface IProps extends IExternalProps {}

const Auth: FC<IProps> = () => {
  const [tab, setTab] = useState('1');
  function callback(key: string) {
    setTab(key);
  }
  const title =
    tab === '1'
      ? 'Регистрация для розничных клиентов'
      : tab === '2'
      ? 'ВХОД ДЛЯ РОЗНИЧНЫХ КЛИЕНТОВ'
      : 'Профиль';
  return (
    <div className="page-with-header">
      <div className="container">
        <Warning className="mt-5">
          <div className="break-all">
            Notice: Undefined index: tid in drupal_page_get_cache() (line 1315
            of /var/www/koreanaparts.ru/includes/bootstrap.inc).
          </div>
        </Warning>
        <h1 className="Auth-title mt-2">{title}</h1>

        <Tabs
          className="Auth-block-tabs"
          defaultActiveKey="1"
          onChange={callback}>
          <TabPane tab="Регистрация" key="1">
            <p className="Auth-paragraph">Email-адрес * :</p>
            <Input className="Auth-line-of-input" placeholder="Введите адрес" />
            <div>
              <Button className="Auth-sign-up-button">
                <p className="Auth-text-button "> РЕГИСТРАЦИЯ</p>
              </Button>
            </div>
          </TabPane>
          <TabPane tab="Вход" key="2">
            <div className="Auth-border">
              <p>
                {' '}
                <b>Логин *</b>{' '}
              </p>
              <Input className="Auth-line-of-input" placeholder="Login" />
              <p>
                Вы можете авторизоваться, используя имя пользователя или адрес
                электронной почты.
              </p>
              <p>
                {' '}
                <b>Пароль *</b>{' '}
              </p>
              <Input className="Auth-line-of-input" placeholder="Password" />
              <p>В поле "Пароль" учитывается регистр.</p>
              <p>Запомнить</p>

              <Button className="Auth-sign-up-butto-two">
                <p className="Auth-text-button "> ВХОД</p>
              </Button>
            </div>
          </TabPane>
          <TabPane tab="Напомнить пароль" key="3">
            <p className="Auth-paragraph">
              Имя пользователя или адрес электронной почты *:
            </p>
            <Input
              className="Auth-line-of-input"
              placeholder="Введите имя или адрес"
            />
            <div>
              <Button className="Auth-sign-up-button">
                <p className="Auth-text-button "> ОТПРАВИТЬ</p>
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
