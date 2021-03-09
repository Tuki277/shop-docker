import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Index from './components/Index/Index'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import ProductsDetails from './pages/ProductsDetail/ProductsDetail'
import CartPages from './pages/Cart/Cart';
import Thankyou from './components/Thankyou/Thankyou';
import Checkout from './components/Checkout/Checkout';
import Admin from './components/Admin/Admin'
import Post from './components/Admin/Post';
import Report from './components/Admin/Report'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Index />
    },
    {
        path: '/about',
        exact: true,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        main: () => <Shop />
    },
    {
        path: '/product/:id',
        exact: false,
        main: ({ match }) => <ProductsDetails match={ match }/>
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPages />
    },
    {
        path: '/thankyou',
        exact: false,
        main: () => <Thankyou />
    },
    {
        path: '/checkout',
        exact: false,
        main: ({ history }) => <Checkout history = { history }/>
    },
    {
        path: '/admin',
        exact: false,
        main: () => <Admin />
    },
    {
        path : '/post',
        exact: false,
        main: () => <Post />
    },
    {
        path: '/post/:id/edit',
        exact: false,
        main: () => <Post />
    },
    {
        report : '/report',
        exact: false,
        main: () => <Report />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;