import { FC, useCallback } from 'react';
import './Cart.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import { deleteCartProduct, updateQuantity } from '../../actions';
import CartProduct from '../../components/CartProduct/CartProduct';
import { Col, Row, Card, Input } from 'antd';
import { COLORS } from '../../constants';
import { Link } from 'react-router-dom';

const { Search } = Input;

interface IExternalProps {}

interface IProps extends IExternalProps {
  // TODO fix
  cartProducts: any;
  deleteCartProduct: (id?: number | string) => void;
  updateQuantity: (id: number, value: number) => void;
}

const Cart: FC<IProps> = ({
  cartProducts,
  deleteCartProduct,
  updateQuantity,
}) => {
  const handleDelete = useCallback(
    (id?: number) => {
      deleteCartProduct(id);
    },
    [deleteCartProduct],
  );

  const handleChangeQuantity = useCallback(
    (id: number, value: number) => {
      updateQuantity(id, value);
    },
    [updateQuantity],
  );

  const renderProducts = useCallback(() => {
    return cartProducts.map((item: any) => (
      <CartProduct
        length={item.length}
        onChangeQuantity={handleChangeQuantity}
        onDelete={handleDelete}
        id={item.id}
        key={item.id}
      />
    ));
  }, [cartProducts, handleDelete, handleChangeQuantity]);

  const getSize = useCallback(() => {
    return cartProducts.reduce((num: number, item: any) => {
      return num + item.length;
    }, 0);
  }, [cartProducts]);

  const getPrice = useCallback(() => {
    return getSize() * 14000;
  }, [getSize]);

  return (
    <div className="mb-4">
      <div className="page-with-header">
        <div className="container pt-3">
          <Breadcrumbs />
          <FloatingFooter />
          <h1 className="mt-5">Корзина</h1>
          <Row className="Cart-product" justify="space-between">
            <Col className="flex mr-5">{renderProducts()}</Col>
            <Col className="Cart-column wow fadeIn" span={7}>
              <Card>
                <div className="d-flex mb-1 justify-content-between">
                  <span>Товары ({getSize()})</span>
                  <span>{getPrice()}</span>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                  <span className="font-weight">Всего</span>
                  <span className="font-weight">{getPrice()}</span>
                </div>
                <Link to="/making">
                  <Button
                    bgColor={COLORS.orange}
                    color={COLORS.black}
                    className="Cart-button--registration mb-4 w-100">
                    Перейти к оформлению
                  </Button>
                </Link>
                <Search
                  enterButton="Применить"
                  placeholder="input search w-100 text"
                />
              </Card>
            </Col>
          </Row>
          <Footer />
        </div>
      </div>
    </div>
  );
};

// TODO types for store
const mapStateToProps = (state: any) => ({
  cartProducts: state.cartProducts,
});

export default connect(mapStateToProps, {
  deleteCartProduct,
  updateQuantity,
})(Cart);
