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
import {useCart} from '../context/CartContext';

const Index: React.FC = () => {
  const [css] = useStyletron();

  const itemProps: BlockProps = {
    display: 'flex',
  };

  const {cart, addToCart} = useCart();

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

      <HeadingMedium>Groceries</HeadingMedium>

      <ItemDisplay items={items} />

      <Cart />
    </div>
  );
};

export default Index;
