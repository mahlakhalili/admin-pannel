// import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';
// import Button from '../Button';
const UserForm = () => {
	const formMethods = useForm();
	return (
		<FormProvider {...formMethods}>
			<form className="form grid gap-4">
				<div className="userForm space-y-4">
					<div className="card grid-cols-2">
						<Input
							name="firstName"
							label="نام"
						/>
						<Input
							name="lastName"
							label=" نام خانوادگی"
						/>

						<Input
							name="province"
							label="استان"
						/>
						<Input
							name="city"
							label="شهر"
						/>

						<Input
							name="phone"
							label="شماره تلفن"
							type="number"
						/>

						<Input
							name="postCode"
							label="کد پستی"
							type="number"
						/>
					</div>
				</div>
			</form>
		</FormProvider>
	);
};

export default UserForm;
