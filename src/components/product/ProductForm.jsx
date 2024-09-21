import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

const ProductForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: 'مهلا',
			lastName: 'خلیلی',
			age: '26',
			job: 'دانشجو',
		},
	});

	return (
		<Form
			className="grid gap-4"
			onSubmit={handleSubmit(
				(data) => {
					console.log(data);
				},
				(error) => {
					console.log(error);
				}
			)}
		>
			<div className="form-input">
				<label>نام</label>
				<input
					type="text"
					{...register('firstName', {
						required: true,
						minLength: 5,
						maxLength: 20,
					})}
				/>
				{errors?.firstName?.type === 'required' && (
					<span className="text-red-600 text-sm">نام خود را وارد کنید</span>
				)}
				{errors?.firstName?.type === 'minLength' && (
					<span className="text-red-600 text-sm">نام باید بیش از پنج حرف باشد</span>
				)}
				{errors?.firstName?.type === 'maxLength' && (
					<span className="text-red-600 text-sm">نام باید کمتر از بیست حرف باشد</span>
				)}
			</div>
			<div className="form-input">
				<label>نام خانوادگی</label>
				<input
					type="text"
					{...register('lastName', {
						required: true,
					})}
				/>
				<div className="form-input">
					<label>جنسیت</label>
					<select {...register('gender')}>
						<option value="female">زن</option>
						<option value="male">مرد</option>
						<option value=""></option>
					</select>
				</div>
			</div>
			<div className="form-input">
				<label>سن</label>
				<input
					name="age"
					type="number"
					{...register('age', {
						required: true,
						min: 18,
						max: 99,
					})}
				/>
				{errors?.age?.type === 'required' && (
					<span className="text-red-600 text-sm">سن خود را وارد کنید</span>
				)}
				{errors?.age?.type === 'min' && (
					<span className="text-red-600 text-sm"> سن شما باید بیش از 18 سال باشد</span>
				)}
				{errors?.age?.type === 'max' && (
					<span className="text-red-600 text-sm"> سن شما باید کمتر از 99 سال باشد</span>
				)}
			</div>
			<div className="form-input">
				<label>شغل</label>
				<input
					name="job"
					type="text"
					{...register('job', {
						required: true,
					})}
				/>
			</div>

			<button
				className="text-white text-lg  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 focus:outline-none"
				type="submit"
			>
				ارسال
			</button>
		</Form>
	);
};

export default ProductForm;
