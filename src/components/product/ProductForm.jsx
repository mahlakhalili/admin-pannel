import { useForm } from 'react-hook-form';

const ProductForm = () => {
	return (
		<div className='grid gap-4'>
			<div className="grid gap-2">
				<label className="font-normal block mb-2  text-xl text-gray-900 dark:text-white">
					نام
				</label>
				<input
					name="firstName"
					type="text"
					className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="John"
				/>
			</div>
			<div className="grid gap-2">
				<label className="block mb-2 font-normal text-xl  text-gray-900 dark:text-white">
					نام خانوادگی
				</label>
				<input
					name="lastName"
					type="text"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="John"
				/>
			</div>
			<div className="grid gap-2">
				<label className="block mb-2  font-normal text-xl text-gray-900 dark:text-white">
					شغل
				</label>
				<input
					name="job"
					type="text"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="John"
				/>
			</div>
		</div>
	);
};

export default ProductForm;
