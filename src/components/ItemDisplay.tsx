import {Item} from '../data/items';
import {Button} from 'baseui/button';

import {FlexGridItem, FlexGrid} from 'baseui/flex-grid';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Plus} from 'baseui/icon';
import {BlockProps} from 'baseui/block';
import {Stepper} from 'baseui/stepper';
import {useQuery, gql} from '@apollo/client';
import client from '../apolloClient';
import {useCart} from '../context/CartContext';

interface Props {
  items: Item[];
}

const itemProps: BlockProps = {
  display: 'flex',
};

const GET_ITEMS = gql`
  query {
    items {
      id
      name
      description
      image
    }
  }
`;

function ItemDisplay({items}: Props) {
  const {loading, error, data} = useQuery(GET_ITEMS, {client});

  const {cart, addToCart} = useCart();
  const updatedCart = [...cart];
  const isItemInCart = (itemId: string) => {
    // Check if the item exists in the cart
    return cart.some((item) => item.id === itemId);
  };

  const getItemQuantity = (itemId: string) => {
    // Find the item in the cart
    const itemInCart = cart.find((item) => item.id === itemId);
    return itemInCart ? itemInCart.quantity : 0;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {data.items.map((item, index) => (
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
                {!isItemInCart(item.id) && (
                  <div>
                    <Button
                      startEnhancer={Plus}
                      onClick={() =>
                        addToCart(
                          {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            quantity: 1,
                          },
                          1,
                        )
                      }
                      overrides={{BaseButton: {style: {width: '100%'}}}}
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}

                {isItemInCart(item.id) && (
                  <div>
                    <Stepper
                      value={getItemQuantity(item.id)}
                      setValue={(newValue) =>
                        addToCart(
                          {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            quantity: newValue,
                          },
                          newValue,
                        )
                      }
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
