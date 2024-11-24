const ListSkeleton = () => {
	return (
		<div className="page">
			<div className="flex items-center justify-between">
				<div className="skeleton w-40 h-5"></div>

				{/* <Link
					className="btn blue"
					to="/product/add"
				>
					افزودن محصول
				</Link> */}
			</div>

			{/* <div className="table-wrapper">
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
			</div> */}
		</div>
	);
};

export default ListSkeleton;
