import { FC, useCallback, useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../assets/logotype.png';
import orangeLogo from '../../assets/orange-logo.png';
import { COLORS } from '../../constants';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Menu, Collapse, Badge } from 'antd';
import Button from '../Button/Button';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SubHeader from '../SubHeader/SubHeader';
import { BiCart } from 'react-icons/bi';
import { connect } from 'react-redux';
import { setProducts } from '../../actions';
import { getLocalStorage } from '../../services/localStorage';
import { Drawer } from 'antd';
// @ts-ignore
import WOW from 'wowjs';

const { Panel } = Collapse;

export type Navs = Array<{
  id: number;
  link: string;
  label: string;
}>;

interface IExternalProps {}

interface IProps extends IExternalProps {
  // TODO fix
  cartProducts: any;
  setProducts: any;
}

interface Nav {
  navs: Array<{
    id: number;
    label: string;
    link?: string;
    subMenuProps?: {
      navs: Navs;
    };
  }>;
}

const NAVS: Nav['navs'] = [
  {
    id: 1,
    label: 'о компании',
    subMenuProps: {
      navs: [
        {
          id: 1,
          link: '/about-company',
          label: 'о компании',
        },
        {
          id: 2,
          link: '/vacancies',
          label: 'вакансии',
        },
        {
          id: 3,
          label: 'новости',
          link: '/news',
        },
        {
          id: 4,
          label: 'акции',
          link: '/actions',
        },
      ],
    },
  },
  {
    id: 2,
    label: 'запчасти',
    subMenuProps: {
      navs: [
        {
          id: 1,
          link: '/corea',
          label: 'корея',
        },
        {
          id: 2,
          link: '/chinese',
          label: 'китай',
        },
        {
          id: 3,
          link: '/japan',
          label: 'япония',
        },
      ],
    },
  },
  {
    id: 3,
    label: 'услуги автосервиса',
    link: '/autoservice',
  },
  {
    id: 4,
    label: 'оптовикам',
    link: '/delivery',
  },
  {
    id: 6,
    label: 'контакты',
    link: '/contacts',
  },
  {
    id: 9,
    label: 'другие ссылки',
    subMenuProps: {
      navs: [
        {
          id: 7,
          label: 'making',
          link: '/making',
        },
        {
          id: 8,
          label: 'prices',
          link: '/prices/12',
        },
        {
          id: 9,
          label: 'product',
          link: '/product/1/750',
        },
        {
          id: 10,
          label: 'guarante',
          link: '/guarante',
        },
        {
          id: 11,
          label: 'auth',
          link: '/auth',
        },
      ],
    },
  },
];

const Header: FC<IProps> = ({ cartProducts, setProducts }) => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  const getProducts = useCallback(() => {
    const products = getLocalStorage('products');

    if (products) {
      setProducts(products);
    }
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const styleHeader = {
    background: COLORS.orangeGradient,
  };

  const renderMenu = useCallback((menu: Navs) => {
    return (
      <Menu className="Header-dropdown-menu">
        {menu.map((item: any) => (
          <Menu.Item className="Header-dropdown-menu--item" key={item.id}>
            <Link className="Header-dropdown-menu--link" to={item.link}>
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }, []);

  const renderBurgerMenu = useCallback((menu: Nav['navs']) => {
    return menu.map((nav) => {
      if (nav.link) {
        return (
          <div className="Header-burger-menu--item" key={nav.id}>
            <Link className="Header-burger-menu--link" to={nav.link}>
              {nav.label}
            </Link>
          </div>
        );
      }

      if (nav.subMenuProps) {
        return (
          <div className="Header-burger-menu--item" key={nav.id}>
            <Collapse defaultActiveKey={[1]} ghost>
              <Panel
                className="Header-burger-menu--panel"
                header={nav.label}
                key={nav.id}>
                <div>
                  {nav.subMenuProps?.navs.map((item) => (
                    <Link
                      key={item.id}
                      className="Header-burger-menu--link Header-burger-menu--panel-link"
                      to={item.link}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Panel>
            </Collapse>
          </div>
        );
      }

      return null;
    });
  }, []);

  const handleChangeStatus = useCallback((status: boolean) => {
    return (e: any) => {
      const className = e.target.classList.contains('Header-burger--container');
      const classNameBurgerButton = e.target.classList.contains(
        'Header-burger-button',
      );

      if (className || classNameBurgerButton) {
        setOpenDrawer(status);
      }
    };
  }, []);

  return (
    <>
      <Drawer
        className="Header-burger--menu"
        placement="right"
        closable={false}
        width={300}
        onClose={onClose}
        visible={isOpenDrawer}>
        <div className="Header-burger--menu-header justify-content-between align-items-start">
          <Button
            onClick={showDrawer}
            className="close-button Header-burger-button"
            bgColor={COLORS.transparent}>
            <AiOutlineClose
              className="Header-burger-button"
              size={25}
              color={COLORS.white}
            />
          </Button>
          <div className="d-flex justify-content-center mb-5">
            <Link to="/">
              <img className="logo-burger" src={orangeLogo} alt="Logo burger" />
            </Link>
          </div>
        </div>
        {renderBurgerMenu(NAVS)}
      </Drawer>

      <div className="Header-container--fixed">
        <SubHeader />
        <header style={styleHeader} className="header">
          <div className="header-container--size container page-container--full">
            <div className="d-flex">
              <Link to="/">
                <img className="logo" src={logo} alt="Logo" />
              </Link>
              <div className="Header-container">
                {NAVS.map((nav) => {
                  if (nav.link) {
                    return (
                      <div className="Header-nav--item" key={nav.id}>
                        <Link className="Header-nav--link" to={nav.link}>
                          {nav.label}
                        </Link>
                      </div>
                    );
                  }

                  if (nav.subMenuProps?.navs) {
                    return (
                      <div className="Header-nav--item" key={nav.id}>
                        <DropdownMenu
                          label={nav.label}
                          navs={renderMenu(nav.subMenuProps.navs)}
                        />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="Header-burger--button ">
                <Button
                  className="Header-burger-button"
                  onClick={handleChangeStatus(true)}
                  bgColor={COLORS.transparent}>
                  <AiOutlineMenu
                    className="Header-burger-button"
                    color={COLORS.black}
                    size={25}
                  />
                </Button>
              </div>
              <div className="ml-2 mr-2">
                <div>
                  <Link to="/cart">
                    <Badge count={cartProducts.length}>
                      <BiCart size={25} />
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

// TODO types for store
const mapStateToProps = (state: any) => ({
  cartProducts: state.cartProducts,
});

export default connect(mapStateToProps, { setProducts })(Header);
