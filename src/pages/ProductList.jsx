const ProductList = () => {
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
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductList;
