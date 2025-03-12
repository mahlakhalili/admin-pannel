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
		</div>
	);
};

export default UsersList;
