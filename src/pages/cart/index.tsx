import React from 'react';
import { useCart } from 'hooks/useCart';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Loading from 'components/elements/Loading';
import Empty from 'components/elements/Empty';
import * as Cart from 'components/features/cart/components/Index';
import { SITE_DESCRIPTION, SITE_IMAGE } from 'constants/base';
import { PAGE_CART } from 'constants/pages';

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = () => {
  const cartHooks = useCart();

  return (
    <Layout title={PAGE_CART} description={SITE_DESCRIPTION} image={SITE_IMAGE}>
      <Container xl5>
        {cartHooks.cartLoading ? (
          <Loading />
        ) : (
          <>
            {cartHooks.cart.lineItems.length === 0 ? (
              <Empty text={'カートに商品がありません'} />
            ) : (
              <>
                <div className={'mx-auto max-w-3xl'}>
                  <Cart.CartHead />
                  <div className='mt-4 w-full'>
                    {cartHooks.cart.lineItems.map((lineItem, index) => {
                      return (
                        <div key={index} className={'flex items-center mx-auto w-full'}>
                          <Cart.CartContentRow lineItem={lineItem} cartHooks={cartHooks} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className='pt-8 mx-auto mt-10 max-w-3xl border-t'>
                  <div className={'block w-full text-right'}>
                    <Cart.CartBuyTotal itemCount={cartHooks.cart.lineItemsCount} subTotal={cartHooks.cart.subTotal} />
                  </div>

                  <div className={'mt-8'}>
                    <Cart.CartCheckoutButton
                      text={'決済画面へ'}
                      onClick={() => {
                        window.location.href = cartHooks.cart.webUrl;
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Index;
