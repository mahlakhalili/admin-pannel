import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/users/UserForm';
import useAddUser from '../../hooks/apis/user/useAddUser';
const AddUser = () => {
	const navigate = useNavigate();
	const addUser = useAddUser({ onAdd: () => navigate('/users/list') });
	return (
		<div className="grid gap-4 font-normal">
			<h1 className="text-2xl">افزودن کاربر</h1>
			<UserForm
				onAdd={(formData) => {
					addUser.mutate(formData);
				}}
			/>
		</div>
	);
};

export default AddUser;
