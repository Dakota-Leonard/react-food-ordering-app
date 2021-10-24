import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  //Animate cart icon when cart is updated
  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ''
  }`;

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length > 0) {
      setButtonIsHighlighted(true);
    } else {
      return;
    }

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
