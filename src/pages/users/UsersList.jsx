import { Link } from 'react-router-dom';
const UsersList = () => {
	return (
		<div className="page">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl">لیست کاربران</h1>
				<Link
					className="btn blue"
					to="/users/add"
				>
					افزودن کاربر
				</Link>
			</div>
			<>
				<div className="table-wrapper">
					<table>
						<thead>
							<tr>
								<th>نام</th>
								<th>نام خانوادگی</th>
								<th> استان</th>
								<th>شهر</th>
								<th>شماره تلفن</th>
								<th>کد پستی</th>
							</tr>
						</thead>
						{/* <tbody>
							{products?.data?.map((product, index) => (
								<TableRow
									key={product.id}
									row={index + 1}
									{...product}
									categories={categories}
									// id={product.id}
									// title={product.title}
									// price={product.price}
									// discount={product.discount}
									// count={product.count}
									// category={product.category}
									// status={product.status}
								/>
							))}
						</tbody> */}
					</table>
				</div>
				{/* <Pagination
					totalPages={products?.pages}
					currentPage={!products?.prev ? 1 : products?.prev + 1}
				/> */}
			</>
		</div>
	);
};

export default UsersList;
