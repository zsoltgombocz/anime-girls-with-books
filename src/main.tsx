import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Component imports
import Layout from './Layout';
import Index from './views/Index';
import Informations from './views/Informations';
import Page404 from './views/404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                id: 'home',
                path: '/',
                element: <Index />,
            },
            {
                id: 'informations',
                path: '/information',
                element: <Informations />,
            },
            {
                path: '*',
                element: <Page404 />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
