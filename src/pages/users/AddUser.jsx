import UserForm from '../../components/users/UserForm';
const AddUser = () => {
	return (
		<div className="grid gap-4 font-normal">
			<h1 className="text-2xl">افزودن کاربر</h1>
			<UserForm />
		</div>
	);
};

export default AddUser;
