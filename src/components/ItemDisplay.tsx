import {Item} from '../data/items';
import {Button} from 'baseui/button';

import {FlexGridItem, FlexGrid} from 'baseui/flex-grid';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Plus} from 'baseui/icon';
import {BlockProps} from 'baseui/block';
import {Stepper} from 'baseui/stepper';

interface Props {
  items: Item[];
  addToCart: (item: Item, value: number) => void;
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
        {items.map((item, index) => (
          <FlexGridItem key={index} {...itemProps}>
            <Card
              overrides={{Root: {style: {width: '328px'}}}}
              headerImage={item.image}
              title={item.name}
            >
              <StyledBody>
                Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                ornare faucibus ex, non facilisis nisl.
              </StyledBody>
              <StyledAction>
                {item.quantity < 1 && (
                  <div>
                    <Button
                      startEnhancer={Plus}
                      onClick={() => addToCart(item, 1)}
                      overrides={{BaseButton: {style: {width: '100%'}}}}
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}

                {item.quantity >= 1 && (
                  <div>
                    <Stepper
                      value={item.quantity}
                      setValue={(newValue) => addToCart(item, newValue)}
                    />
                  </div>
                )}
              </StyledAction>
            </Card>
          </FlexGridItem>
        ))}
      </FlexGrid>
    </>
  );
}

export default ItemDisplay;
