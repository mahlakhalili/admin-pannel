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
			<form className="form ">
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
