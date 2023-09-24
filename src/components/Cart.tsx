import { Item } from '../data/items';

interface Props {
  cart: Item[];
}

function Cart({cart}: Props) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
