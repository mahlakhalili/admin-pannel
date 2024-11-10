import useGetProductList from '../hooks/apis/product/useGetProductList';
import useDeleteProduct from '../hooks/apis/product/useDeleteProduct';
import Button from '../components/Button';
const ProductList = () => {
	const { data: products } = useGetProductList();
	const deleteProduct = useDeleteProduct();
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
							<tr key={product.id}>
								<td>{index + 1}</td>
								<td>{product.title}</td>
								<td>{product.price}</td>
								<td>{product.discount || 0}</td>
								<td>{product.count}</td>
								<td>
									<Button
										text="حذف"
										color="red"
										onClick={() => {
											deleteProduct.mutate(product.id);
										}}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductList;
