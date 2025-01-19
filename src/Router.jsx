import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProductList from './pages/product/ProductList';
import AddProduct from './pages/product/AddProduct';
import EditProduct from './pages/product/EditProduct';
import AddCategory from './pages/category/AddCategory';
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
			{
				path: '/product/edit/:productId',
				element: <EditProduct />,
			},
			{
				path: '/product/add/category',
				element: <AddCategory />,
			},
		],
	},
]);

export default Router;
