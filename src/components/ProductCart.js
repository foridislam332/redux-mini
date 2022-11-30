import React from 'react';
import { BiListPlus } from "react-icons/bi";
import { useProducts } from '../context/ProductProvider';
import { actionTypes } from '../state/ProductState/actionTypes';

const ProductCart = ({ product }) => {
    const { dispatch } = useProducts();
    const { image, model, rating, keyFeature } = product;
    return (
        <div key={product._id} className='flex flex-col text-indigo-900 border rounded-3xl p-3 shadow-lg'>
            <div className='h-52 w-52 mx-auto'>
                <img src={image} alt="" />
            </div>
            <h1 className='font-bold text-center'>{model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {rating}</p>
            <div className='flex-1'>
                <ul className='space-y-2'>
                    {
                        keyFeature.map(item => <li className='text-sm'>{item}</li>)
                    }
                </ul>
            </div>
            <div className='flex items-center justify-between gap-2 text-white mt-3'>
                <button className='flex-1 bg-indigo-500 rounded-full'
                    onClick={() =>
                        dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
                    }
                >Add to cart</button>

                <button className='bg-indigo-500 px-1 py-1 rounded-sm'
                    onClick={() => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product._id })}
                ><BiListPlus /></button>
            </div>
        </div>
    );
};

export default ProductCart;