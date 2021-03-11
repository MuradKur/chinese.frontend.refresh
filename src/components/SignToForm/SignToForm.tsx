import { FC } from 'react';
import {
  Menu,
  Dropdown,
  Button as ButtonDropdown,
  Row,
  Col,
  Input,
  Checkbox,
  DatePicker,
} from 'antd';
import moment from 'moment';
import Modal, { IModalProps } from '../Modal/Modal';
import Warning from '../Warning/Warning';

const { TextArea } = Input;

interface IExternalProps {
  type?: 'modal';
}

interface IProps extends IExternalProps, IModalProps {}

const SignToForm: FC<IProps> = (props) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const content = (
    <div>
      <Warning>
        <div>
          <b>Внимание!</b>
        </div>
        <div>
          В случае отправки формы записи на сервис после <b>20:00</b>,
          автомобиль может быть принят на обслуживание не раньше <b>10:00</b>{' '}
          следующего дня.
        </div>
      </Warning>
      <Row className="mt-3 block" align="bottom">
        <Col span={13} className="mr-3">
          <label className="mb-1 d-block">Выберите автосервис из списка</label>
          <div>
            <Dropdown overlay={menu} placement="topLeft">
              <ButtonDropdown block>Автосервис</ButtonDropdown>
            </Dropdown>
          </div>
        </Col>
        <Col>
          или на <a href="/autoservice">карте</a>
        </Col>
      </Row>
      <Row className="mt-3 block" justify="space-between">
        <Col span={11} className="mr-1">
          <label className="mb-1 d-block">Ваше имя</label>
          <div>
            <Input />
          </div>
        </Col>
        <Col span={11}>
          <label className="mb-1 d-block">Ваш телефон</label>
          <div>
            <Input />
          </div>
        </Col>
      </Row>
      <div className="mt-3 block">
        <Checkbox className="mb-1">Запчасти свои</Checkbox>
        <p className="line-height-1 mb-0">
          Отметьте поле при визите на сервис со своими запчастями. Или не
          отмечайте, если требуется подбор и заказ.
        </p>
      </div>
      <div className="mt-3 block">
        <label className="mb-1 d-block line-height-1">
          Удобные для Вас дата и время посещения СТО:
        </label>
        <Col span={11}>
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            placeholder="Выбрать дату и время"
          />
        </Col>
      </div>
      <div className="mt-3 block">
        <label className="mb-1 d-block line-height-1">Комментарий:</label>
        <TextArea placeholder="Комментарий" rows={4} />
      </div>
      <div className="mt-3">
        Нажимая на кнопку «Отправить», вы даете{' '}
        <a href="/">согласие на обработку своих персональных данных.</a>
      </div>
    </div>
  );

  if (props.type === 'modal') {
    return <Modal {...props}>{content}</Modal>;
  }

  return content;
};

export default SignToForm;
