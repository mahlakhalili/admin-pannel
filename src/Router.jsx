import { createBrowserRouter } from 'react-router-dom';
import App from './App';
//product
import ProductList from './pages/product/ProductList';
import AddProduct from './pages/product/AddProduct';
import EditProduct from './pages/product/EditProduct';
//category
import CategoryList from './pages/category/CategoryList';
import AddCategory from './pages/category/AddCategory';
import EditCategory from './pages/category/EditCategory';
//users
import UsersList from './pages/users/UsersList';

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
				path: '/category/list',
				element: <CategoryList />,
			},
			{
				path: '/category/add',
				element: <AddCategory />,
			},
			{
				path: '/category/edit/:categoryId',
				element: <EditCategory />,
			},
			{
				path: '/users/list',
				element: <UsersList />,
			},
		],
	},
]);

export default Router;
