import CategoryForm from '../../components/category/CategoryForm';

const EditCategory = () => {
	return (
		<div className="grid gap-4">
			<h1 className="text-2xl">ویرایش دسته بندی</h1>
			<CategoryForm mode="EDIT" />
		</div>
	);
};

export default EditCategory;
