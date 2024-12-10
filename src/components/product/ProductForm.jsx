import { FormProvider, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

const ProductForm = ({
	mode = 'ADD',
	data = {},
	onAdd = () => {},
	isAdding = false,
	onEdit = () => {},
	isEditing = false,
}) => {
	const formMethods = useForm({
		defaultValues: {
			title: data.title ?? '',
			description: data.description ?? '',
			price: data.price ?? '',
			discount: data.discount ?? '',
			count: data.count ?? '',
		},
	});
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
					type="number"
				/>
				<Input
					name="discount"
					label="تخفیف"
					type="number"
				/>
				<Input
					name="count"
					label="تعداد"
					type="number"
				/>
				<div className="btn  flex justify-center items-center col-span-3 mt-4 text-lg">
					{mode === 'ADD' && (
						<Button
							color="blue"
							type="submit"
							text="ذخیره"
							loading={isAdding}
							onClick={formMethods.handleSubmit((formData) => {
								onAdd(formData);
							})}
						/>
					)}
					{mode === 'EDIT' && (
						<Button
							text="ویرایش"
							color="green"
							loading={isEditing}
							onClick={formMethods.handleSubmit((formData) => {
								onEdit(formData);
							})}
						/>
					)}
				</div>
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
};

export default ProductForm;
