import useEditCategory from '../../hooks/apis/category/useEditCategory';
import useGetCategory from '../../hooks/apis/category/useGetCategory';
import CategoryForm from '../../components/category/CategoryForm';
import FormSkeleton from '../../skeleton/FormSkeleton';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
	const { categoryId } = useParams();
	const navigate = useNavigate();
	const { data: category, isLoading } = useGetCategory(categoryId);
	const EditCategory = useEditCategory({
		onEdit: () => navigate('/category/list'),
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
			/>
		</div>
	);
};

export default EditCategory;
