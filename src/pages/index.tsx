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
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {BlockProps} from 'baseui/block';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Plus} from 'baseui/icon';
import items, {Item} from '../data/items';
import ItemDisplay from '../components/ItemDisplay';
import Cart from '../components/Cart';

const Index: React.FC = () => {
  const [css] = useStyletron();

  const itemProps: BlockProps = {
    display: 'flex',
  };

  const bread: string[] = [
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fa7d76ce-4c02-4a32-b073-fe66ec9df196.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_374ec86e-a9a1-46f4-92cb-cac98d542544.jpeg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_60046d73-ac76-4eae-8cfe-4cbf745dfd62.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fd7a17cc-858d-4b2c-bde4-5c9522e57d59.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d0765a62-9099-4ccf-abc8-e78c300b0229.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_20f97a5b-59d1-450c-a888-ce3469ef4851.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_51cb9a58-ca6f-4fd9-bd21-ed34d4cc97f1.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_940d304a-6372-4c06-88ad-f006f547c9b9.jpg',
  ];

  const [cart, setCart] = React.useState<Item[]>([]);
  const [quantites, setItems] = React.useState<Item[]>([]);

  

  const breadList = bread.map((element, index) => (
    <FlexGridItem key={index} {...itemProps}>
      <Card
        overrides={{Root: {style: {width: '328px'}}}}
        headerImage={element}
        title="Example card"
      >
        <StyledBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl.
        </StyledBody>
        <StyledAction>
          <Button
            startEnhancer={Plus}
            overrides={{BaseButton: {style: {width: '100%'}}}}
          >
            Add to Cart
          </Button>
        </StyledAction>
      </Card>
    </FlexGridItem>
  ));

  const quantityList = quantites.map((element, index) => (
    <FlexGridItem key={index} {...itemProps}>
      <Card
        overrides={{Root: {style: {width: '328px'}}}}
        headerImage={element.image}
        title={element.name}
      >
        <StyledBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl.
        </StyledBody>
        <StyledAction>
          <Button
            startEnhancer={Plus}
            onClick={() => console.log(element.name, element.quantity + 1)}
            overrides={{BaseButton: {style: {width: '100%'}}}}
          >
            Add to Cart
          </Button>
        </StyledAction>
      </Card>
    </FlexGridItem>
  ));

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
