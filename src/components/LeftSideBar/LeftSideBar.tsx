import { FC } from 'react';
import { Menu } from 'antd';
import './LeftSideBar.scss';
import { Link } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';

interface IMenuItem {
  id: number;
  label: {
    type?: 'title' | 'label'; // по нему будет определяться отмечать лейбл или нет
    value: string;
    link: string; // ссылку куда ввести
  };
  submenu?: Array<IMenuItem>;
}

interface IExternalProps {
  menu?: Array<IMenuItem>;
}

interface IProps extends IExternalProps {}

const LeftSideBarMenu: IExternalProps['menu'] = [
  {
    id: 2,
    label: {
      type: 'title',
      value: 'Санкт-Петербург',
      link: '/',
    },
    submenu: [
      {
        id: 1000,
        label: {
          type: 'label',
          value: 'Выборг',
          link: '/',
        },
      },
      {
        id: 1001,
        label: {
          type: 'label',
          value: 'Гатчина',
          link: '/',
        },
      },
    ],
  },
  {
    id: 3,
    label: {
      type: 'title',
      value: 'Москва',
      link: '/',
    },
  },
];

const LeftSideBar: FC<IProps> = () => {
  const renderSubmenu = (item: IMenuItem) => {
    return item.submenu?.map(renderMenu);
  };

  const renderMenu = (item: IMenuItem, key: number) => {
    const className =
      item.label.type === 'title'
        ? 'LeftSideBar-title LeftSideBar-item'
        : 'LeftSideBar-item';

    if (!item.submenu) {
      return (
        <Menu.Item key={key}>
          <Link className={className} to={item.label.link}>
            {item.label.value}
          </Link>
        </Menu.Item>
      );
    }

    return (
      <SubMenu className={className} key={key} title={item.label.value}>
        {renderSubmenu(item)}
      </SubMenu>
    );
  };

  return (
    <Menu className="LeftSideBar" mode="inline">
      {LeftSideBarMenu.map(renderMenu)}
    </Menu>
  );
};

export default LeftSideBar;
