import { useForm } from 'react-hook-form';

const ProductForm = () => {
	const { register, handleSubmit } = useForm();

	return (
		<div className="grid gap-4">
			<div className="form-input">
				<label>نام</label>
				<input
					type="text"
					placeholder="John"
					{...register('firstName')}
				/>
			</div>
			<div className="form-input">
				<label>نام خانوادگی</label>
				<input
					type="text"
					placeholder="John"
					{...register('lastName')}
				/>
			</div>
			<div className="form-input">
				<label>شغل</label>
				<input
					name="job"
					type="text"
					placeholder="John"
					{...register('job')}
				/>
			</div>
			<button
				type="button"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none "
				onClick={handleSubmit((data) => {
					console.log(data);
				})}
			>
				Default
			</button>
		</div>
	);
};

export default ProductForm;
