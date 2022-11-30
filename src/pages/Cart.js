import React from 'react';
import ProductCart from '../components/ProductCart';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
    const { state } = useProducts();

    let content;

    if (state.loading) {
        content = <p>Loading</p>;
    }

    if (state.error) {
        content = <p>Something went wrong</p>;
    }

    if (!state.loading && !state.error && state.cart.length === 0) {
        content = <p>Nothing to show, product list empty</p>;
    }

    if (!state.loading && !state.error && state.cart.length) {
        content = state.cart.map(product => <ProductCart product={product} />)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
        </div>
    );
};

export default Cart;