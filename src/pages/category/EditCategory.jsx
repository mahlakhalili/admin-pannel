import useEditCategory from '../../hooks/apis/category/useEditCategory';
import useGetCategory from '../../hooks/apis/category/useGetCategory';
import useDeleteCategory from '../../hooks/apis/category/useDeleteCategory';
import CategoryForm from '../../components/category/CategoryForm';
import FormSkeleton from '../../skeleton/FormSkeleton';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
	const { categoryId } = useParams();
	const navigate = useNavigate();
	const { data: category, isLoading } = useGetCategory(categoryId);
	const EditCategory = useEditCategory({
		onEdit: () => navigate('/category/list'),
	});
	const deleteCategory = useDeleteCategory({
		onDelete: () => navigate('/category/list'),
	});
	if (isLoading) return <FormSkeleton />;
	return (
		<div className="grid gap-4">
			<h1 className="text-2xl">ویرایش دسته بندی</h1>
			<CategoryForm
				mode="EDIT"
				data={category}
				isEditing={EditCategory.isPending}
				onEdit={(formData) => {
					EditCategory.mutate(formData);
				}}
				isDeleting={deleteCategory.isPending}
				onDelete={(id) => {
					deleteCategory.mutate(id);
				}}
			/>
		</div>
	);
};

export default EditCategory;
