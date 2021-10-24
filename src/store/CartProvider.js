import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let existingCartItemIndex;
  let updatedTotalAmount;
  let updatedItem;
  let updatedItems;

  switch (action.type) {
    case 'ADD':
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      existingCartItemIndex = state.items.findIndex(
        item => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItem = { ...action.item, amount: action.item.amount };
        updatedItems = [...state.items, updatedItem];
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case 'REMOVE':
      existingCartItemIndex = state.items.findIndex(
        item => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      updatedTotalAmount = state.totalAmount - existingItem.price;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    default:
      return defaultCartState;
  }
};

const CartProvider = props => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatch({ type: 'ADD', item });
  };

  const removeItemFromCardHandler = id => {
    dispatch({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
