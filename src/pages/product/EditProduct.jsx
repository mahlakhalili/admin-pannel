import ProductForm from '../../components/product/ProductForm';
import FormSkeleton from '../../skeleton/FormSkeleton';
import useGetProduct from '../../hooks/apis/product/useGetProduct';
import useEditProduct from '../../hooks/apis/product/useEditProduct';
import useDeleteProduct from '../../hooks/apis/product/useDeleteProduct';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const { data: product, isLoading } = useGetProduct(productId);
	const editProduct = useEditProduct({
		onEdit: () => navigate('/product/list'),
	});
	const deleteProduct = useDeleteProduct({
		onDelete: () => navigate('/product/list'),
	});
	if (isLoading) return <FormSkeleton />;
	return (
		<div className="grid gap-4 font-normal">
			<h1 className="text-2xl">ویرایش محصول</h1>
			<ProductForm
				mode="EDIT"
				data={product}
				isEditing={editProduct.isPending}
				onEdit={(formData) => {
					editProduct.mutate(formData);
				}}
				isDeleting={deleteProduct.isPending}
				onDelete={(id) => {
					deleteProduct.mutate(id);
				}}
			/>
		</div>
	);
};

export default EditProduct;
