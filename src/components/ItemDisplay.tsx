import {Item} from '../data/items';
import {Button} from 'baseui/button';

import {FlexGridItem, FlexGrid} from 'baseui/flex-grid';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Plus} from 'baseui/icon';
import {Block, BlockProps} from 'baseui/block';

interface Props {
  items: Item[];
  addToCart: (item: Item) => void;
}

const itemProps: BlockProps = {
  display: 'flex',
};

function ItemDisplay({items, addToCart}: Props) {
  return (
    <>
      <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {items.map((element, index) => (
          <FlexGridItem key={index} {...itemProps}>
            <Card
              overrides={{Root: {style: {width: '328px'}}}}
              headerImage={element.image}
              title={element.name}
            >
              <StyledBody>
                Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                ornare faucibus ex, non facilisis nisl.
              </StyledBody>
              <StyledAction>
                <Button
                  startEnhancer={Plus}
                  onClick={() => addToCart(element)}
                  overrides={{BaseButton: {style: {width: '100%'}}}}
                >
                  Add to Cart
                </Button>
              </StyledAction>
            </Card>
          </FlexGridItem>
        ))}
      </FlexGrid>
    </>
  );
}

export default ItemDisplay;
