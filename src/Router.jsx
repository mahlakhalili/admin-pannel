import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/product/list',
				element: <ProductList />,
			},
			{
				path: '/product/add',
				element: <AddProduct />,
			},
		],
	},
]);

export default Router;
