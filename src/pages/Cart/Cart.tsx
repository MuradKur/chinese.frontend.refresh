import { FC, useCallback } from 'react';
import './Cart.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import { deleteCartProduct, addToCartProduct } from '../../actions';
import CartProduct from '../../components/CartProduct/CartProduct';
import { Col, Row, Card, Input } from 'antd';
import { COLORS } from '../../constants';

const { Search } = Input;

interface IExternalProps {}

interface IProps extends IExternalProps {
  // TODO fix
  cartProducts: any;
  deleteCartProduct: any;
  addToCartProduct: any;
}

const Cart: FC<IProps> = ({
  cartProducts,
  deleteCartProduct,
  addToCartProduct,
}) => {
  const handleDelete = useCallback(
    (id?: number) => {
      const cartProductsResult = cartProducts.filter(
        (item: any) => item.id !== id,
      );
      deleteCartProduct(id);
      localStorage.setItem('products', JSON.stringify(cartProductsResult));
    },
    [cartProducts, deleteCartProduct],
  );

  const handleChangeQuantity = useCallback(
    (id: number, value: number) => {
      const productIndex = cartProducts.findIndex(
        (item: any) => item.id === id,
      );

      if (productIndex !== -1) {
        cartProducts[productIndex].length = value;
        const newCart = [
          ...cartProducts.slice(0, productIndex),
          cartProducts[productIndex],
          ...cartProducts.slice(productIndex + 1),
        ];
        addToCartProduct(newCart);
        localStorage.setItem('products', JSON.stringify(newCart));
      }
    },
    [cartProducts, addToCartProduct],
  );

  const renderProducts = useCallback(() => {
    return cartProducts.map((item: any) => (
      <CartProduct
        length={item.length}
        onChangeQuantity={handleChangeQuantity}
        onDelete={handleDelete}
        id={item.id}
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
                <Button
                  bgColor={COLORS.orange}
                  color={COLORS.black}
                  className="Cart-button--registration mb-4 w-100">
                  Перейти к оформлению
                </Button>
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
  addToCartProduct,
})(Cart);
