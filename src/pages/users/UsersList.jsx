import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useGetUserList from '../../hooks/apis/user/useGetUserList';
import useDeleteUser from '../../hooks/apis/user/useDeleteUser';
import { useSearchParams } from 'react-router-dom';
import Button from '../../components/Button';
// import { MdEdit } from 'react-icons/md';
// import { MdDelete } from 'react-icons/md';
const UsersList = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { data: users } = useGetUserList({
		params: {
			_page: searchParams.get('_page'),
			_per_page: searchParams.get('_per_page'),
		},
	});
	console.log(users);

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
								<th>ردیف</th>
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
const TableRow = ({ row, firstName, lastName, province, city, phone, postCode }) => {
	// const deleteUser = useDeleteUser({});
	return (
		<tr>
			<td>{row}</td>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{province}</td>
			<td>{city}</td>
			<td>{phone}</td>
			<td>{postCode}</td>
		</tr>
	);
};
TableRow.propTypes = {
	row: PropTypes.number,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	province: PropTypes.string,
	city: PropTypes.string,
	phone: PropTypes.number,
	postCode: PropTypes.number,
};

export default UsersList;
