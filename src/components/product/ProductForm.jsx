import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import Modal from '../Modal';

const ProductForm = ({
	mode = 'ADD',
	data = {},
	onAdd = () => {},
	isAdding = false,
	onEdit = () => {},
	isEditing = false,
	onDelete = () => {},
	isDeleting = false,
}) => {
	const [modalDisplay, setModalDisplay] = useState(false);
	const formMethods = useForm({
		defaultValues: {
			title: data.title ?? '',
			description: data.description ?? '',
			price: data.price ?? '',
			discount: data.discount ?? '',
			count: data.count ?? '',
			// img: data.img ?? '',
			// image: data.image ?? '',
		},
	});
	const onSubmit = (formData) => {
		// const fd = new FormData();
		// fd.append('title', formData.title);
		// fd.append('description', formData.description);
		// fd.append('price', formData.price);
		// fd.append('discount', formData.discount);
		// fd.append('count', formData.count);
		// fd.append('image', formData.image);
		if (mode === 'ADD') onAdd(formData);
		else if (mode === 'EDIT') onEdit({ ...formData, id: data.id });
	};

	return (
		<FormProvider {...formMethods}>
			<form className="form grid grid-cols-3 gap-4">
				<Input
					name="title"
					label="عنوان"
					rules={{
						required: 'عنوان را وارد کنید',
					}}
					className="col-span-3"
				/>
				<Input
					mode="TEXTAREA"
					name="description"
					label="توضیحات"
					className="col-span-3"
				/>
				<Input
					name="price"
					label="قیمت"
					type="currency"
				/>
				<Input
					name="discount"
					label="درصد تخفیف"
					type="number"
				/>
				<Input
					name="count"
					label="تعداد"
					type="number"
				/>

				<div className="flex items-center justify-center w-full">
					<label
						for="dropzone-file"
						className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100  "
					>
						<div className="flex flex-col items-center justify-center pt-5 pb-6">
							<svg
								className="w-8 h-8 mb-4 text-gray-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 16"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
								/>
							</svg>
							<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
								<span className="font-semibold">Click to upload</span> or drag and
								drop
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								SVG, PNG, JPG or GIF (MAX. 800x400px)
							</p>
						</div>
						<input
							id="dropzone-file"
							type="file"
							className="hidden"
						/>
					</label>
				</div>

				{/* <Input
					name="img"
					label="آپلود عکس"
					type="file"
					onChange={(_, e) => {
						formMethods.setValue(image, e.target.files[0]);
					}}
				/> */}
				<div className="btn  flex justify-center items-center gap-4 col-span-3 mt-4 text-lg">
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
							loading={isAdding}
							onClick={formMethods.handleSubmit(onSubmit)}
						/>
					)}
					{mode === 'EDIT' && (
						<>
							<Button
								text="حذف"
								color="red"
								loading={isDeleting}
								onClick={() => onDelete(data.id)}
							/>
							<Button
								text="ویرایش"
								color="green"
								loading={isEditing}
								onClick={formMethods.handleSubmit(onSubmit)}
							/>
						</>
					)}
				</div>
				{modalDisplay && (
					<Modal
						title="انتخاب عکس"
						actions={[
							{
								text: 'انتخاب',
								color: 'blue',
								onClick: () => {
									console.log('Hi');
								},
							},
							{
								text: 'انصراف',
								color: 'outline-red',
								onClick: () => {
									console.log('Hi');
								},
							},
						]}
					>
						<div className="w-[700px]">انتخاب عکس</div>
					</Modal>
				)}
			</form>
		</FormProvider>
	);
};
ProductForm.propTypes = {
	mode: PropTypes.oneOf(['ADD', 'EDIT']),
	data: PropTypes.object,
	onAdd: PropTypes.func,
	isAdding: PropTypes.bool,
	onEdit: PropTypes.func,
	isEditing: PropTypes.bool,
	onDelete: PropTypes.func,
	isDeleting: PropTypes.bool,
};

export default ProductForm;
