import useGetProductList from '../hooks/apis/product/useGetProductList';
import useDeleteProduct from '../hooks/apis/product/useDeleteProduct';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
const ProductList = () => {
	const { data: products } = useGetProductList();

	return (
		<div className="page">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl">لیست محصولات</h1>
				<Link
					className="btn blue"
					to="/product/add"
				>
					افزودن محصول
				</Link>
			</div>

			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>ردیف</th>
							<th>عنوان محصول</th>
							<th>قیمت</th>
							<th>تخفیف</th>
							<th>تعداد</th>
							<th className="row">عملیات</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product, index) => (
							<TableRow
								key={product.id}
								row={index + 1}
								// {...product}
								id={product.id}
								title={product.title}
								price={product.price}
								discount={product.discount}
								count={product.count}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const TableRow = ({ row, id, title, price, discount, count }) => {
	const deleteProduct = useDeleteProduct();
	return (
		<tr key={id}>
			<td>{row}</td>
			<td>{title}</td>
			<td>{price}</td>
			<td>{discount || 0}</td>
			<td>{count}</td>
			<td>
				<Button
					text="حذف"
					color="red"
					loading={deleteProduct.isPending}
					onClick={() => {
						deleteProduct.mutate(id);
					}}
				/>
			</td>
		</tr>
	);
};
ProductList.propTypes = {
	row: PropTypes.number,
	id: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.string,
	discount: PropTypes.string,
	count: PropTypes.string,
};
export default ProductList;
