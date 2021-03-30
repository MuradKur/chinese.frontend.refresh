// TODO: fix

export const setProducts = (products: any) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const addToCartProduct = (product: any) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const updateQuantity = (productId: number, value: number) => {
  return {
    type: 'UPDATE_QUANITY_PRODUCT',
    payload: {
      productId: productId,
      value: value,
    },
  };
};

export const deleteCartProduct = (productId?: number | string) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: productId,
  };
};
