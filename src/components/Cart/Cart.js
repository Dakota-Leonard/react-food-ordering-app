const Cart = props => {
  const cartItems = <ul>{[id: 'c1', name: 'Sushi', amount: 2, price: 12.99].map(item => <li>item.name</li>)}</ul>;
  return (
    <div>
      {cartItems}}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
