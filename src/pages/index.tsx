import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import {Button, KIND} from 'baseui/button';

import {HeadingMedium} from 'baseui/typography';
import {useStyletron} from 'baseui';
import {BlockProps} from 'baseui/block';
import items, {Item} from '../data/items';
import ItemDisplay from '../components/ItemDisplay';
import Cart from '../components/Cart';

const Index: React.FC = () => {
  const [css] = useStyletron();

  const itemProps: BlockProps = {
    display: 'flex',
  };

  const [cart, setCart] = React.useState<Item[]>([]);

  const addToCart = (item: Item) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      updatedCart.push(item);
    }

    setCart(updatedCart);
  };

  return (
    <div>
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>BaseCart</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />

        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Button kind={KIND.secondary}>Login</Button>
          </StyledNavigationItem>

          <StyledNavigationItem>
            <Button>Register</Button>
          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>

      {/* Side bar */}

      <HeadingMedium>Bread</HeadingMedium>

      <ItemDisplay items={items} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  );
};

export default Index;
