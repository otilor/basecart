import React from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from '../styletron';
import {CartProvider} from '../context/CartContext';

function MyApp({Component, pageProps}) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
