import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
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
				<div className="col-span-3">
					<div
						className="flex flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 pt-5 pb-6 text-gray-500 "
						onClick={() => setModalDisplay(true)}
					>
						<BsCloudUpload size={30} />
						<p className="mb-2 text-sm  dark:text-gray-400">Click to upload</p>
						<p className="text-xs  dark:text-gray-400">
							SVG, PNG, JPG or GIF (MAX. 800x400px)
						</p>
					</div>
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
						onClose={() => setModalDisplay(false)}
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
									setModalDisplay(false);
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
