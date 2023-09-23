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

const Index: React.FC = () => {
  const [css] = useStyletron();
  const nav = [
    {
      title: 'Colors',
      itemId: '#level1.1',
      subNav: [
        {
          title: 'Primary',
          itemId: '#level1.1.1',
        },
        {
          title: 'Shades',
          itemId: '#level1.1.2',
          subNav: [
            {
              title: 'Dark',
              itemId: '#level1.1.2.1',
            },
            {
              title: 'Light',
              itemId: '#level1.1.2.2',
            },
          ],
        },
      ],
    },
    {
      title: 'Sizing',
      itemId: '#level1.2',
    },
    {
      title: 'Typography',
      itemId: '#level1.3',
    },
  ];

  const [location, setLocation] = React.useState('#level1.1.1');
  const itemProps: BlockProps = {
    display: 'flex',
  };

  const array: string[] = [
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_75c26b19-f902-4c53-9b78-b9efca722b13.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a21fe8c4-88b3-44b5-ba37-dd49ebed6014.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d7dcd978-645a-4e93-a073-a2dcba9be774.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_18850fc6-5466-4c06-9d84-623509ffe430.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_06c8d88f-3fea-4139-96ba-db2b41ac51d1.jpg',
    'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8ee9d1a8-988f-4d07-99be-57fb05a68767.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4453585c-c158-438d-bae5-980973efc462.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ec4a5933-3593-468d-a1e8-946c8e9ceff0.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_60046d73-ac76-4eae-8cfe-4cbf745dfd62.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fd7a17cc-858d-4b2c-bde4-5c9522e57d59.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d0765a62-9099-4ccf-abc8-e78c300b0229.jpg',
    'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_20f97a5b-59d1-450c-a888-ce3469ef4851.jpg',
  ];

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
          <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
            Button Label
          </Button>
        </StyledAction>
      </Card>
    </FlexGridItem>
  ));

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

      <HeadingMedium>Fresh Vegetables</HeadingMedium>

      <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {imageList}
      </FlexGrid>
    </div>
  );
};

export default Index;
