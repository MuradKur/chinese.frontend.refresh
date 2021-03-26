// TODO: fix this
export const addToCartProduct = (product: any) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const deleteCartProduct = (productId: number) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: productId,
  };
};
