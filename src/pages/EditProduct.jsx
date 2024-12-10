import ProductForm from '../components/product/ProductForm';
import FormSkeleton from '../skeleton/FormSkeleton';
import { useNavigate } from 'react-router-dom';
import useGetProduct from '../hooks/apis/product/useGetProduct';
import useEditProduct from '../hooks/apis/product/useEditProduct';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
	const { productId } = useParams();
	const { data: product, isLoading } = useGetProduct(productId);
	const navigate = useNavigate();

	const editProduct = useEditProduct({
		onEdit: () => navigate('/product/list'),
	});
	if (isLoading)
		return (
			<div>
				<FormSkeleton />
			</div>
		);
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
			/>
		</div>
	);
};

export default EditProduct;
