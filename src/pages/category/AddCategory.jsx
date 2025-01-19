import CategoryForm from '../../components/category/CategoryForm';
import useAddCategory from '../../hooks/apis/category/useAddCategory';
import { useNavigate } from 'react-router-dom';
const AddCategory = () => {
	const navigate = useNavigate();
	const addCategory = useAddCategory({
		onAdd: () => navigate('/category/list'),
	});
	return (
		<div className="grid gap-4">
			<h1 className="text-2xl">افزودن دسته بندی</h1>
			<CategoryForm
				mode="ADD"
				isAdding={addCategory.isPending}
				onAdd={(formData) => {
					addCategory.mutate(formData);
				}}
			/>
		</div>
	);
};

export default AddCategory;
