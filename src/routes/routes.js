import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import TopRated from '../pages/TopRated';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/top-rated',
                element: <TopRated />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]);

export default routes;