export interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

const quantites: Item[] = [
    {
      id: 1,
      name: 'Tomato',
      price: 2.33,
      image:
        'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_75c26b19-f902-4c53-9b78-b9efca722b13.jpg',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Onions',
      price: 0.56,
      image:
        'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a21fe8c4-88b3-44b5-ba37-dd49ebed6014.jpg',
      quantity: 0,
    },
    {
        id: 3,
        name: 'Bread',
        price: 0.56,
        image:
        'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d7dcd978-645a-4e93-a073-a2dcba9be774.jpg',
        quantity: 0,
      },
      {
        id: 4,
        name: 'Bell Pepper',
        price: 0.56,
        image:
        'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_18850fc6-5466-4c06-9d84-623509ffe430.jpg',
        quantity: 0,
      },
      {
        id: 5,
        name: 'Lettuce',
        price: 0.56,
        image:
        'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_06c8d88f-3fea-4139-96ba-db2b41ac51d1.jpg',
        quantity: 0,
      },
      {
        id: 6,
        name: 'Mushrooms',
        price: 0.56,
        image:
        'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8ee9d1a8-988f-4d07-99be-57fb05a68767.jpg',
        quantity: 0,
      },
      {
        id: 7,
        name: 'Brocolli',
        price: 0.56,
        image:
        'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4453585c-c158-438d-bae5-980973efc462.jpg',
        quantity: 0,
      },
      {
        id: 8,
        name: 'Lemon',
        price: 0.56,
        image:
        'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_940d304a-6372-4c06-88ad-f006f547c9b9.jpg',
        quantity: 0,
      }
  ];

  export default quantites;