const initialState = {
  cartProducts: [] as any,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cartProducts: [...state.cartProducts, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
