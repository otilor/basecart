import React from 'react';
import {useCart} from '../context/CartContext';

function Cart() {
  const {cart} = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Price: ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
