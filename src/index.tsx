import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import { RestCountriesApp } from './RestCountriesApp';
import './index.css';

const router = createBrowserRouter([{
	path: '/',
	element:<RestCountriesApp/>
}])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
			<RouterProvider router={router} />
	</React.StrictMode>
);
