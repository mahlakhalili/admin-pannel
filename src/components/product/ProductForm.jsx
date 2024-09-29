import { useForm, FormProvider } from 'react-hook-form';
import Input from '../Input';
import { Form } from 'react-hook-form';

const ProductForm = () => {
	
	const formMethods = useForm({
		defaultValues: {
			firstName: 'مهلا',
			lastName: 'خلیلی',
		},
	});
	

	return (
		<FormProvider {...formMethods}>
			<Form
				className="grid gap-4"
				onSubmit={formMethods.handleSubmit(
					(data) => {
						console.log(data);
					},
					(error) => {
						console.log(error);
					}
				)}
			>
				{/* <Controller
					control={formMethods.control}
					name="ReactDatepicker"
					render={({ field: { onChange, onBlur, value, ref } }) => (
						
					)}
					/> */}
				<Input
					label={'نام'}
					type="text"
					name="firstName"
					rules={{
						required: ' bbنام خود را وارد کنید',
						minLength: {
							value: 2,
							message: 'نام باید بیش از دو حرف باشد',
						},
						maxLength: {
							value: 20,
							message: 'نام باید کمتر از بیست حرف باشد',
						},
					}}
				/>
				<Input
					label={'نام خانوادگی'}
					type="text"
					name="lastName"
					rules={{
						required:'نام خانوادگی خود را وارد کنید'
					}}
				/>

				{/* 
				<Input
					label={'نام خانوادگی'}
					type="text"
				/>
				<Input
					label={'سن'}
					type="number"
				/>
				<Input
					label={'شغل'}
					type="text"
				/> */}
				{/* <div className="form-input">
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
			</div> */}
				{/* <div className="form-input">
				<label>نام خانوادگی</label>
				<input
					type="text"
					{...register('lastName', {
						required: true,
					})}
				/>
				<div className="form-input">
					<label>وضعیت تاهل</label>
					<select
						{...register('maritalStatus')}
						className="form-input select"
					>
						<option value="singel">مجرد</option>
						<option value="married">متاهل</option>
					</select>
				</div>
			</div> */}
				{/* <div className=" flex items-center mb-4">
					<input
						type="checkbox"
						value="showGender"
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
						// {...register('showGender')}
					/>
					<label className="ms-2 text-sm font-medium text-gray-900 ">نمایش جنسیت</label>
				</div> */}
				{/* {watch('showGender') && (
				<>
					<div className=" flex items-center mb-4">
						<input
							type="radio"
							value="female"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							{...register('maritalStatus')}
						/>
						<label className="ms-2 text-sm font-medium text-gray-900 ">زن</label>
					</div>
					<div className="flex items-center mb-4">
						<input
							type="radio"
							value="male"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							{...register('maritalStatus')}
						/>
						<label className="ms-2 text-sm font-medium text-gray-900 ">مرد</label>
					</div>
				</>
			)} */}

				{/* <div className="flex items-center mb-4">
				<input
					id="default-radio-1"
					type="radio"
					value="above18"
					{...register('isAbove18')}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					بالای 18 سال
				</label>
			</div>
			<div className="flex items-center">
				<input
					id="default-radio-2"
					type="radio"
					value="under18"
					{...register('isAbove18')}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					پایین 18 سال
				</label>
			</div> */}
				{/* <div className="form-input">
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
			</div> */}
				{/* <div className="form-input">
				<label>شغل</label>
				<input
					name="job"
					type="text"
					{...register('job', {
						required: true,
					})}
				/>
			</div> */}

				<button
					className="text-white text-lg  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 focus:outline-none"
					type="submit"
				>
					ارسال
				</button>
				{/* <button
					type="button"
					// onClick={() => {
					// 	// console.log(getValues('firstName'));
					// 	// console.log(watch('lastName'));
					// 	// setValue('firstName', 'mahla khalili');
					// 	// reset()
					// 	// setFocus('firstName')
					// 	// setError('lastName', {
					// 		// type: 'server',
					// 		// message: 'error',
					// 	});
					// }}
				>
					ذخیره
				</button> */}
			</Form>
		</FormProvider>
	);
};

export default ProductForm;
