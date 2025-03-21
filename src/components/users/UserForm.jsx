import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input';
import Button from '../Button';
const UserForm = ({ mode = 'ADD', onAdd = () => {} }) => {
	const formMethods = useForm({
		resolver: yupResolver(
			yup.object().shape({
				firstName: yup
					.string()
					.required('نام را وارد کنید.')
					.min(2, 'نام باید حداقل دو کاراکتر باشد.'),
				lastName: yup
					.string()
					.required('نام خانوادگی را وارد کنید.')
					.min(1, 'نام خانوادگی باید بیشتر از یک حرف باشد.'),
				province: yup
					.string()
					.required('استان را وارد کنید.')
					.min(1, 'استان باید بیشتر از یک حرف باشد.'),
				city: yup
					.string()
					.required('شهر را وارد کنید.')
					.min(1, 'شهر باید بیشتر از یک حرف باشد.'),
				phone: yup
					.number()
					.typeError('شماره تلفن را وارد کنید.')
					.required('شماره تلفن را وارد کنید.')
					.min(0, 'شماره تلفن باید مثبت و صفر باشد.'),
				postCode: yup
					.number()
					.typeError('کد پستی  را وارد کنید.')
					.required(' کد پستی را وارد کنید.')
					.min(0, ' کد پستی باید مثبت و صفر باشد.'),
			})
		),
	});
	const { handleSubmit } = formMethods;
	return (
		<FormProvider {...formMethods}>
			<form className="form grid gap-4">
				<div className="userForm space-y-4">
					<div className="card grid-cols-2 col-span-2">
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
								
								onClick={formMethods.handleSubmit((formData) => {
									console.log(formData)
									onAdd(formData);
								})}
								
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
	onAdd: PropTypes.func,
};

export default UserForm;
