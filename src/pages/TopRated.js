import React from 'react';
import ProductCart from '../components/ProductCart';
import { useProducts } from '../context/ProductProvider';

const TopRated = () => {
    const { state } = useProducts();

    let content;

    if (state.loading) {
        content = <p>Loading</p>;
    }

    if (state.error) {
        content = <p>Something went wrong</p>;
    }

    if (!state.loading && !state.error && state.products.length === 0) {
        content = <p>Nothing to show, product list empty</p>;
    }

    if (!state.loading && !state.error && state.products.length) {
        content = state.products.filter(product => product.rating >= 4).map(product => <ProductCart product={product} />)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
        </div>
    );
};

export default TopRated;