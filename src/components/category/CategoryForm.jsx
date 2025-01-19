import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';

const CategoryForm = ({
	mode = 'ADD',
	data = {},
	onAdd = () => {},
	isAdding = false,
	onEdit = () => {},
	isEditing = false,
	onDelete = () => {},
	isDeleting = false,
}) => {
	const formMethods = useForm({
		defaultValues: {
			title: data.title ?? '',
			description: data.description ?? '',
		},
	});
	const { handleSubmit } = formMethods;
	const onSubmit = (formData) => {
		if (mode === 'ADD') onAdd(formData);
		else if (mode === 'EDIT') onEdit({ ...formData, id: data.id });
	};
	return (
		<FormProvider {...formMethods}>
			<form className="form grid gap-4 ">
				<div className="card">
					<Input
						name="title"
						label="عنوان"
						rules={{
							required: 'عنوان را وارد کنید',
						}}
					/>
					<Input
						mode="TEXTAREA"
						name="description"
						label="توضیحات"
					/>
				</div>
				<div className="btn  flex justify-center items-center gap-4  mt-4 text-lg">
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
							onClick={handleSubmit(onSubmit)}
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
								onClick={handleSubmit(onSubmit)}
							/>
						</>
					)}
				</div>
			</form>
		</FormProvider>
	);
};
CategoryForm.propTypes = {
	mode: PropTypes.oneOf(['ADD', 'EDIT']),
	data: PropTypes.object,
	onAdd: PropTypes.func,
	isAdding: PropTypes.bool,
	onEdit: PropTypes.func,
	isEditing: PropTypes.bool,
	onDelete: PropTypes.func,
	isDeleting: PropTypes.bool,
};

export default CategoryForm;
