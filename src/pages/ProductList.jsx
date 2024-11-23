import useGetProductList from '../hooks/apis/product/useGetProductList';
import useDeleteProduct from '../hooks/apis/product/useDeleteProduct';
import Button from '../components/Button';
const ProductList = () => {
	const { data: products } = useGetProductList();

	return (
		<div className="page">
			<h1 className="text-2xl">لیست محصولات</h1>

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
								row={index}
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

export default ProductList;
