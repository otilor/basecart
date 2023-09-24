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

  const array: string[] = [
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a21fe8c4-88b3-44b5-ba37-dd49ebed6014.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d7dcd978-645a-4e93-a073-a2dcba9be774.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_18850fc6-5466-4c06-9d84-623509ffe430.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_06c8d88f-3fea-4139-96ba-db2b41ac51d1.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8ee9d1a8-988f-4d07-99be-57fb05a68767.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4453585c-c158-438d-bae5-980973efc462.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ec4a5933-3593-468d-a1e8-946c8e9ceff0.jpg',
  ];

  const fruits: string[] = [
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d3b77042-47af-4789-b285-d654e820c163.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_95c5428a-64c9-40f4-9c35-c9da9829c342.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4fe2e522-a62c-49a2-96e9-8d15f0895977.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d022a6f7-3dbb-4803-8024-8b2a3f6b11c5.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b9c0631a-3dec-410f-9e5f-332af0c52b0b.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cb92de5d-749a-4084-94bc-34d4538a86b1.jpeg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a984a9ca-fcd1-4fcc-8cb0-492da8701809.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bd591eec-d175-45b5-b68b-5750c77e255c.jpeg',
  ];

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

  const imageList = array.map((element, index) => (
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
          <Button onClick={() => console.log('Hi')} startEnhancer={Plus}>
            Add to Cart
          </Button>
        </StyledAction>
      </Card>
    </FlexGridItem>
  ));

  const fruitList = fruits.map((element, index) => (
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

      {/* <HeadingMedium>Fresh Vegetables</HeadingMedium>

      <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {imageList}
      </FlexGrid>

      <HeadingMedium>Fresh Fruits</HeadingMedium>

      <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {fruitList}
      </FlexGrid> */}

      <HeadingMedium>Bread</HeadingMedium>

      {/* <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {breadList}
      </FlexGrid> */}

      <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {quantityList}
      </FlexGrid>

      <ItemDisplay items={items} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default Index;
