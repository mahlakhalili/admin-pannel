import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';
const UserForm = ({ mode = 'ADD' }) => {
	const formMethods = useForm();
	const { handleSubmit, register } = formMethods;
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
					<div className="btn  flex justify-center items-center gap-4 col-span-2 mt-4 text-lg">
						<Button
							text="انصراف"
							color="outline-red"
							to="/product/list"
						/>
						{mode === 'ADD' && (
							<Button
								color="blue"
								type="submit"
								text="ذخیره"
								// loading={isAdding}
								// onClick={handleSubmit(onSubmit)}
							/>
						)}
						{mode === 'EDIT' && (
							<>
								<Button
									text="حذف"
									color="red"
									// loading={isDeleting}
									// onClick={() => onDelete(data.id)}
								/>
								<Button
									text="ویرایش"
									color="green"
									type="submit"
									// loading={isEditing}
									// onClick={handleSubmit(onSubmit)}
								/>
							</>
						)}
					</div>
				</div>
			</form>
		</FormProvider>
	);
};
UserForm.propTypes = {
	mode: PropTypes.oneOf(['ADD', 'EDIT']),
};

export default UserForm;
