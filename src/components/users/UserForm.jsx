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
			})
		),
	});
	const { handleSubmit, register, setValue, getValues } = formMethods;
	return (
		<FormProvider {...formMethods}>
			<form className="form grid gap-4">
				<div className="userForm space-y-4">
					<div className="card grid-cols-2 col-span-2">
						<Input
							name="firstName"
							label="نام"
							rules={{
								required: 'نام را وارد کنید',
								minLength: {
									value: 2,
									message: 'نام باید حداقل باید دو کاراکتر باشد.',
								},
							}}
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
