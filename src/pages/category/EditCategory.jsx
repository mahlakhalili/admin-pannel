import useGetCategory from '../../hooks/apis/category/useGetCategory';
import CategoryForm from '../../components/category/CategoryForm';
import FormSkeleton from '../../skeleton/FormSkeleton';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
	const { categoryId } = useParams();
	const { data: category, isLoading } = useGetCategory(categoryId);
	if (isLoading) return <FormSkeleton />;
	return (
		<div className="grid gap-4">
			<h1 className="text-2xl">ویرایش دسته بندی</h1>
			<CategoryForm
				mode="EDIT"
				data={category}
			/>
		</div>
	);
};

export default EditCategory;
