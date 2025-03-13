import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useGetUserList from '../../hooks/apis/user/useGetUserList';
import Button from '../../components/Button';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
const UsersList = () => {
	const { data: users } = useGetUserList({});
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
								<th className="row">عملیات</th>
							</tr>
						</thead>
						<tbody>
							{users?.data?.map((user, index) => (
								<TableRow
									key={user.id}
									row={index + 1}
									{...user}

									// id={product.id}
									// title={product.title}
									// price={product.price}
									// discount={product.discount}
									// count={product.count}
									// category={product.category}
									// status={product.status}
								/>
							))}
						</tbody>
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
const TableRow = ({ firstName, lastName, province, city, phone, postCode }) => {
	// const deleteProduct = useDeleteProduct({});
	return (
		<tr key={user.id}>
			<td>{index + 1}</td>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{province}</td>
			<td>{city}</td>
			<td>{phone}</td>
			<td>{postCode}</td>
			<td>
				<div className="btns flex items-center gap-4">
					<Button
						icon={<MdEdit size={18} />}
						color="green"
						to={`/product/edit/${id}`}
					/>
					<Button
						icon={<MdDelete size={18} />}
						color="red"
						// loading={deleteProduct.isPending}
						// onClick={() => {
						// 	deleteProduct.mutate(id);
						// }}
					/>
				</div>
			</td>

			<td>
				<div className="btns flex items-center gap-4">
					<Button
						icon={<MdEdit size={18} />}
						color="green"
						// to={`/product/edit/${id}`}
					/>
					<Button
						icon={<MdDelete size={18} />}
						color="red"
						// loading={deleteProduct.isPending}
						// onClick={() => {
						// 	deleteProduct.mutate(id);
						// }}
					/>
				</div>
			</td>
		</tr>
	);
};
TableRow.propTypes = {
	id: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	province: PropTypes.string,
	city: PropTypes.string,
	phone: PropTypes.number,
	postCode: PropTypes.number,
};

export default UsersList;
