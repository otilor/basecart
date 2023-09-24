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
      name: 'Lemon',
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
  ];

  export default quantites;